import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {guuid} from "../../utils/helpers";

class CommentForm extends Component {

    state = {
        body: '',
        bodyValid: false,
        errors: {}
    };

    onInputChange = (e) => {

        const {name, value} = e.target;

        this.setState({
            [name]: value
        }, () => this.validateField(name, value));

    };

    validateField(field, value) {

        this.setState(this.getFieldValidation(field, value));

    }

    getFieldValidation = (field, value) => {

        switch (field) {

            case 'body': {

                const valid = value && value.length > 0;

                return {
                    errors: {
                        body: valid ? '' : 'Body is required'
                    },
                    bodyValid: valid
                };

            }

            default: {
                return {};
            }

        }

    };

    submit = () => {

        const {username, onSubmit, id, parentId} = this.props;
        const {body, bodyValid} = this.state;

        if (bodyValid) {
            onSubmit({
                id: id || guuid(),
                timestamp: Date.now(),
                owner: username,
                author: username,
                parentId,
                body,
            });
            this.setState({body: ''});
        }

    };

    componentDidMount() {

        const {body} = this.props;

        if (body) {
            this.updateState('body', this.props);
        }

    }

    updateState = (field, props) => {

        if (props[field] !== this.state[field]) {
            this.setState({
                [field]: props[field],
                ...this.getFieldValidation(field, props[field])
            });
        }

    };

    render() {

        const {body, errors, bodyValid} = this.state;
        const {hideBack} = this.props;

        return (
            <form onSubmit={this.submit}>


                <div className="row m-n">
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

                        {!hideBack &&
                        <a
                            onClick={() => window.history.back()}
                            className="btn grey lighten-2 grey-text"
                        ><i className="material-icons left">undo</i> Back</a>
                        }

                        <a className="btn blue" onClick={this.submit} disabled={!bodyValid}><i
                            className="material-icons left">save</i> Submit</a>

                    </div>
                </div>

            </form>
        );

    }

}

CommentForm.propTypes = {
    onSubmit: PropTypes.func,
    id: PropTypes.string,
    body: PropTypes.string,
    parentId: PropTypes.string,
    hideBack: PropTypes.bool,
};

function mapStateToProps({users}) {
    return {
        username: users.username
    }
}

export default connect(mapStateToProps)(CommentForm);