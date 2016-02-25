jest.dontMock('../app/sidebar.jsx');
jest.dontMock("../app/config/operators.js");

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Sidebar = require("../app/sidebar");
var operators = require("../app/config/operators.js");

describe('Sidebar', () => {
    it('should render sidebar with expected operator', () => {
        const getCurrentOperator = jest.genMockFunction();
        const selectOperator = jest.genMockFunction();
        let sidebar = TestUtils.renderIntoDocument(
            <Sidebar
                getCurrentOperator={getCurrentOperator}
                selectOperator={selectOperator}
                operators={operators}/>
        );
        let sidebarNode = ReactDOM.findDOMNode(sidebar, 'Sidebar');
        const html = sidebarNode.textContent;
        operators.forEach(function (operator) {
            expect(html).toContain(operator.name);
        });
    });
});
