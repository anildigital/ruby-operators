import React from "react";
import Sidebar from "./sidebar";
import operators from "./config/operators";
var Highlight = require('react-highlight');

var Home = React.createClass({

    getInitialState: function() {
        console.log("Came here");
        var self = this;
        var operator = operators.filter(function(o) {
            return (o.name.split(' ').join('-') === self.props.params.operator);
        })[0];

        return {
            operators: operators,
            currentIndex: operators.indexOf(operator)
        };
    },

    componentWillReceiveProps(nextProps) {
        var self = this;
        var operator = this.state.operators.filter(function(o) {
            return (o.name.split(' ').join('-') === nextProps.params.operator);
        })[0];

        this.setState({
            currentIndex: this.state.operators.indexOf(operator)
        });
    },

    getCurrentOperator: function() {
        if (this.state.operators !== undefined){
            return this.state.operators[this.state.currentIndex];
        } else {
            return {name: "", symbol: ""}
        }
    },

    showNextOperator: function() {
        var nextIndex;
        var self = this;
        var isMaxIndex = function() {
            return self.state.currentIndex === (self.state.operators.length - 1);
        }

        if (isMaxIndex()){
            nextIndex = 0;
        } else {
            nextIndex = this.state.currentIndex + 1;
        }
        window.location.href = "/#/" + this.state.operators[nextIndex].name.split(' ').join('-');
    },

    selectOperator: function(operator) {
        window.location.href =  "/#/" + operator.name.split(' ').join('-');
    },

    render: function() {
        return (
            <div className="row" >
                <Sidebar getCurrentOperator={this.getCurrentOperator} selectOperator={this.selectOperator} operators={this.state.operators} />
                <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    <Header />
                    <Operator showNextOperator={this.showNextOperator} currentOperator={this.getCurrentOperator()} />
                </div>
            </div>
        );
    }
});

var Header = React.createClass({
    render: function() {
        return (
            <h1 className="page-header">Ruby Operators</h1>
        );
    }
});

var Operator = React.createClass({
    render: function() {
        return (
            <div className="wrapper">
                <div className="operator" onClick={this.props.showNextOperator}>
                    {this.props.currentOperator.symbol}
                </div>
                <div className="operator_name">
                    {this.props.currentOperator.name}
                </div>
                <OperatorExampleCodeSnippet example={this.props.currentOperator.example} />
            </div>
        )
    }
});

var OperatorExampleCodeSnippet = React.createClass({
    render: function() {
        if (this.props.example !== undefined) {
            return (
                <Highlight class="ruby">
                    {this.props.example}
                </Highlight>
            )
        } else {
            return (
                <span></span>
            )
        }
    }
});

module.exports = Home;
