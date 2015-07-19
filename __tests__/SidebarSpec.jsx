jest.dontMock("../app/sidebar");
jest.dontMock("../app/config/operators.js");

describe("Sidebar", function() {

    it("should render sidebar with expected operators", function() {
        var React = require("react/addons");
        var TestUtils = React.addons.TestUtils;

        var Sidebar = require("../app/sidebar");
        var operators = require("../app/config/operators.js");

        var getCurrentOperator = jest.genMockFunction();

        var selectOperator = jest.genMockFunction();

        var sidebar = TestUtils.renderIntoDocument(
            <Sidebar getCurrentOperator={getCurrentOperator} selectOperator={selectOperator} operators={operators}/>
        );

        var sidebar = TestUtils.findRenderedDOMComponentWithClass(sidebar, 'sidebar');
        var html = sidebar.getDOMNode().textContent;
        expect(html).toContain('hashrocket');
    });
});
