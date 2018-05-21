import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './Components/App';
import HomePage from './Components/Home/HomePage';
import AboutPage from './Components/About/AboutPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);