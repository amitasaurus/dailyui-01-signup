import React, { Component } from "react";
import "./form.scss";
import "@material/textfield/mdc-text-field.scss";
import { MDCTextField } from "@material/textfield";
import Basic from "./basic";

class Form extends Component {
    state = {};
    componentDidMount() {
        document
            .querySelectorAll(".mdc-text-field")
            .forEach(el => new MDCTextField(el));
    }
    render() {
        return (
            <div className="form">
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
                        <Basic />
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
