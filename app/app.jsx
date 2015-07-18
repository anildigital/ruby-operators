import jQuery from "jquery";
import React from "react";
import Router from "react-router";
import { DefaultRoute, Route, RouteHandler, Redirect } from "react-router";

window.jQuery = jQuery;

require("./assets/lib/css/bootstrap.min.css");
require("./assets/lib/css/bootstrap-theme.min.css");
require("./assets/lib/js/bootstrap.min.js");

require("./assets/css/style.css");
require("./assets/css/github.css");

import Home from "./home";

var App = React.createClass({
    render: function() {
        return (
            <RouteHandler/>
        );
    }
});

var routes = (
    <Route handler={App} path="/">
        <Redirect from="/" to="/spaceship" params={{operator: "spaceship"}} />
        <Route path="/:operator" handler={Home} />
    </Route>
);

Router.run(routes, Router.HashLocation, function (Handler) {
    React.render(<Handler/>, document.body);
});
