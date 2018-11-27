import React, { Component, Fragment } from "react";
import { Header, Footer} from './Layouts';
import Avatar from './Layouts/Avatar';

export default class extends Component {
    render() {
        return <Fragment>
            < Header />
            < Avatar />
            < Footer />
        </Fragment>
    }
}