import React from "react";
import Select from "./select";
import { shallow } from "enzyme";


const props = {
    options: [
        {value: "text_1", label: "Test_1"},
        {value: "text_2", label: "Test_2"},
    ],
    value: 0,
    handleChange: () => {},
};

const setUp = (props) => shallow(<Select {...props} />);

describe("Select component", () => {
    describe("Has props", () => {
        const component = setUp(props);

        it("should render select element", () => {
            const select = component.find("select");
            expect(select).toHaveLength(1);
        });

        it("should render 2 options", () => {
            const options = component.find("option");
            expect(options).toHaveLength(2);
        });
    });

    describe("Has no props", () => {
        it("should render placeholder", () => {
            const component = shallow(<Select />);
            const placeholder = component.find(".placeholder");
            expect(placeholder).toHaveLength(1);
        });
    });

    describe("defaultProps", () => {
        it("should use default handleChange", () => {
            const result = Select.defaultProps.handleChange();
            expect(result).toBe('Test');
        });
    });    
});
