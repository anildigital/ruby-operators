import jQuery from "jquery";
import React from "react";

import { render } from 'react-dom'
import { DefaultRoute, Router, Route, RouteHandler, IndexRedirect, hashHistory } from "react-router";

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
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/:operator" component={Home} />
        <IndexRedirect to="/spaceship" />
      </Route>
    </Router>
), document.getElementById("container"))
