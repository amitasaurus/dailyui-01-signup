import React, { Component } from "react";
import "./form.scss";
import "@material/textfield/mdc-text-field.scss";
import { MDCTextField } from "@material/textfield";
import CustomInput from "./input";

class Form extends Component {
    state = {};
    componentDidMount() {
        document
            .querySelectorAll(".mdc-text-field")
            .forEach(el => new MDCTextField(el));
    }
    render() {
        return (
            <form className="form" name="signupForm" autoComplete="off">
                <input
                    autoComplete="false"
                    name="hidden"
                    type="text"
                    style={{ display: "none" }}
                />
                <div className="splitscreen">
                    <div className="splitscreen--left">
                        <div className="heading">Experience Sikkim</div>
                        <div className="sub-heading">Where Nature Smiles</div>
                        <div className="footer-links">
                            <div className="link">Places</div>
                            <span>&#8729;</span>
                            <div className="link">Experiences</div>
                            <span>&#8729;</span>
                            <div className="link">People</div>
                        </div>
                    </div>
                    <div className="splitscreen--right">
                        <CustomInput
                            label="Your Name"
                            type="text"
                            customClass="custom-input"
                        />
                        <CustomInput
                            label="Your Email"
                            type="email"
                            customClass="custom-input"
                        />
                        <CustomInput
                            label="Your Query"
                            type="textarea"
                            customClass="custom-input"
                        />
                        <div className="footer">
                            <button type="button">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;
