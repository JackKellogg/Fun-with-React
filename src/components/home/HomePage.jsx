"use strict";

import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Welcome to the home page!</h1>
                <p>This is my page to play with React. dude.</p>
                <Link to="about" className="btn btn-primary btn-lg">About This.</Link>
            </div>
        );
    }
}

export default HomePage;