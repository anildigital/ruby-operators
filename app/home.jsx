import React from "react";
import { hashHistory } from 'react-router'
import Sidebar from "./sidebar";
import operators from "./config/operators";
import Highlight from 'react-highlight';

var Home = React.createClass({

    getInitialState: function() {
        const operator = operators.filter(o => {
            return (o.name.split(' ').join('-') === this.props.params.operator);
        })[0];

        return {
            operators: operators,
            currentIndex: operators.indexOf(operator)
        };
    },

    componentWillReceiveProps(nextProps) {
        const operator = this.state.operators.filter( o => {
            return (o.name.split(' ').join('-') === nextProps.params.operator);
        })[0];

        this.setState({
            currentIndex: this.state.operators.indexOf(operator)
        });
    },
    
    getCurrentOperator: function() {
        let defaultOperator = {name: "", symbol: ""};
        return (this.state.operators === undefined) ?
            defaultOperator : this.state.operators[this.state.currentIndex];
    },

    showNextOperator: function() {
        const isMaxIndex = () => {
            return this.state.currentIndex === (this.state.operators.length - 1);
        }
        const nextIndex = isMaxIndex() ? 0 : this.state.currentIndex + 1;
        hashHistory.push(this.state.operators[nextIndex].name.split(' ').join('-'))
    },

    selectOperator: function(operator) {
        hashHistory.push(operator.name.split(' ').join('-'))
    },

    render: function() {
        return (
            <div className="row" >
                <Sidebar
                    getCurrentOperator={this.getCurrentOperator}
                    selectOperator={this.selectOperator}
                    operators={this.state.operators} />
                <div className="col-sm-9 col-sm-offset-3 col-md-9 col-md-offset-3 main">
                    <Header />
                    <Operator
                        showNextOperator={this.showNextOperator}
                        currentOperator={this.getCurrentOperator()} />
                </div>
            </div>
        );
    }
});

var Header = React.createClass({
    render: function() {
        return (
            <h1 className="page-header">
                Ruby Operators
            </h1>
        );
    }
});

var Operator = React.createClass({
    render: function() {
        return (
            <div className="wrapper">
                <div
                    className="operator"
                    onClick={this.props.showNextOperator}>
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
                <span>
                </span>
            )
        }
    }
});

module.exports = Home;
