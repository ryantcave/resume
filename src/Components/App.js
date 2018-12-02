import React, { Component, Fragment } from "react";
import { Header, Footer, Avatar, Construction, TabBar } from './Layouts';

export default class extends Component {
    render() {
        return <Fragment>

            < Header />
            < Construction />
            < Avatar />
            < TabBar />
            < Footer />

        </Fragment>
    }
}