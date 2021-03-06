/**
 * Created by greg on 03/09/17.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {capitalize} from "../utils/helpers";

class CategoryList extends Component {

    render() {

        const {categories, currentCategory} = this.props;

        return (
            <ul className="section table-of-contents m-n">
                <li>
                    <Link
                        to={'/'}
                        className={classNames({'active': !currentCategory})}
                    >All</Link>
                </li>
                {categories.map(c =>
                    <li key={c.name}>
                        <Link
                            to={'/category/' + c.path}
                            className={classNames({'active': c.path === currentCategory})}
                        >{capitalize(c.name)}</Link>
                    </li>
                )}

            </ul>
        );

    }
}

CategoryList.propTypes = {
    currentCategory: PropTypes.string,
};

function mapStateToProps({categories}) {
    return {
        categories: categories.categories
    }
}

export default connect(mapStateToProps)(CategoryList);