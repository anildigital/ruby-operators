import React from 'react';

var Sidebar = React.createClass({

    isOperatorSelected: function(operator) {
        if(operator === this.props.getCurrentOperator()){
            return "active";
        } else {
            return "";
        }
    },

    displayOperator: function(operator) {
        return(
            <li className={this.isOperatorSelected(operator)} onClick={this.props.selectOperator.bind(this, operator)}>
                {operator.name}&nbsp;
                <span className="operator_mini">
                    {operator.symbol}
                </span>
            </li>
        )
    },

    render: function() {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                    {this.props.operators.map(this.displayOperator)}
                </ul>
            </div>
        );
    }

});

module.exports = Sidebar;
