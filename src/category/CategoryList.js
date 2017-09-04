/**
 * Created by greg on 03/09/17.
 */

import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchCategories} from "./utils/api";
import {loadCategories} from "./actions/index";
import {capitalize} from "../utils/helpers";

class CategoryList extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        fetchCategories().then(res => {
            dispatch(loadCategories(res.categories))
        });
    }

    render() {

        const {categories} = this.props;

        return (
            <ul className="section table-of-contents m-n">
                {categories.map(c =>
                    <li key={c.name}>
                        <Link to={c.path} >{capitalize(c.name)}</Link>
                    </li>
                )}

            </ul>
        );

    }
}

function mapStateToProps({categories}) {
    return {
        categories: Object.keys(categories)
            .reduce((current, key) => {
                return [...current, categories[key]]
            }, [])
    }
}

export default connect(mapStateToProps)(CategoryList);