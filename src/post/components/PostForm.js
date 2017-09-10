import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {capitalize, guuid} from "../../utils/helpers";

class PostForm extends Component {

    state = {
        title: '',
        body: '',
        category: '',
        titleValid: false,
        bodyValid: false,
        categoryValid: false,
        formValid: false,
        errors: {}
    };

    onInputChange = (e) => {

        const {name, value} = e.target;

        this.setState({
            [name]: value
        }, () => this.validateField(name, value));

    };

    validateField(field, value) {

        this.setState(this.getFieldValidation(field, value), this.validateForm);

    }

    getFieldValidation = (field, value) => {

        switch (field) {

            case 'title': {

                const valid = value && value.length > 0;

                return {
                    errors: {
                        title: valid ? '' : 'Title is required'
                    },
                    titleValid: valid
                };
            }

            case 'body': {

                const valid = value && value.length > 0;

                return {
                    errors: {
                        body: valid ? '' : 'Body is required'
                    },
                    bodyValid: valid
                };

            }

            case 'category': {

                const valid = value && value.length > 0;

                return {
                    errors: {
                        body: valid ? '' : 'Category is required'
                    },
                    categoryValid: valid
                };

            }

            default: {
                return {};
            }

        }

    };

    validateForm = () => {

        const {titleValid, bodyValid, categoryValid} = this.state;

        this.setState({formValid: titleValid && bodyValid && categoryValid});

    };

    submit = () => {

        const {username, onSubmit, id} = this.props;
        const {title, body, category, formValid} = this.state;

        if (formValid) {
            onSubmit({
                id: id || guuid(),
                timestamp: Date.now(),
                owner: username,
                author: username,
                title,
                body,
                category
            });
        }

    };

    componentDidMount() {

        const {title, category, body} = this.props;

        if (title || category || body) {
            this.updateState('title', this.props);
            this.updateState('category', this.props);
            this.updateState('body', this.props);
        }

    }

    updateState = (field, props) => {

        if (props[field] !== this.state[field]) {
            this.setState({
                [field]: props[field],
                ...this.getFieldValidation(field, props[field])
            }, () => this.validateForm());
        }

    };

    render() {

        const {categories} = this.props;
        const {title, body, category, titleValid, bodyValid, categoryValid, errors, formValid} = this.state;

        return (
            <form>

                <div className="row">

                    <div className="input-field col s6">
                        <input
                            id="title"
                            name="title"
                            placeholder="Type the title"
                            className={classNames('validate', {'invalid': !titleValid && errors.title})}
                            value={title}
                            onChange={(e) => this.onInputChange(e)}
                        />
                        <label htmlFor="title" data-error={errors.title} className="active">Title</label>
                    </div>

                    <div className="input-field col s6">
                        <select id="category"
                                name="category"
                                value={category}
                                className={classNames('validate', {'invalid': !categoryValid && errors.category})}
                                onChange={(e) => this.onInputChange(e)}
                        >
                            <option value="" disabled>Select one</option>
                            {categories.map(category => (
                                <option key={category.name} value={category.name}>{capitalize(category.name)}</option>
                            ))}
                        </select>
                        <label htmlFor="category" data-error={errors.category} className="active">Category</label>
                    </div>

                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <textarea
                            id="body"
                            className={classNames('materialize-textarea validate', {'invalid': !bodyValid && errors.body})}
                            name="body"
                            value={body}
                            onChange={(e) => this.onInputChange(e)}
                        />
                        <label htmlFor="body" data-error={errors.body} className="active">Body</label>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 right-align">

                        <a
                            onClick={() => window.history.back()}
                            className="btn grey lighten-2 grey-text"
                        ><i className="material-icons left">undo</i> Back</a>

                        <a className="btn blue" onClick={this.submit} disabled={!formValid}><i
                            className="material-icons left">save</i> Submit</a>

                    </div>
                </div>

            </form>
        );

    }

}

PostForm.propTypes = {
    onSubmit: PropTypes.func,
    title: PropTypes.string,
    body: PropTypes.string,
    category: PropTypes.string,
};

function mapStateToProps({categories, users}) {
    return {
        categories: categories.categories,
        username: users.username
    }
}

export default connect(mapStateToProps)(PostForm);