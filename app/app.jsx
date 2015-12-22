import jQuery from "jquery";
import React from "react";

import { render } from 'react-dom'
import { DefaultRoute, Router, Route, RouteHandler, Redirect, IndexRoute } from "react-router";

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
            <div>
              {this.props.children}
            </div>
        );
    }
});

render((
    <Router>
      <Route path="/" component={App}>
        <Redirect to="/spaceship" />
        <Route path="/:operator" component={Home} />
        <IndexRoute component={Home} />
      </Route>
    </Router>
), document.getElementById("container"))
