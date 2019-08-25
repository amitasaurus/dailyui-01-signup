import React, { Component } from "react";
import "./form.scss";
import "@material/textfield/mdc-text-field.scss";
import { MDCTextField } from "@material/textfield";
import CustomInput from "./input";
// Building a controlled component
class Form extends Component {
    state = {
        email: "",
        name: "",
        password: ""
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
    };

    componentDidMount() {
        document
            .querySelectorAll(".mdc-text-field")
            .forEach(el => new MDCTextField(el));
    }
    render() {
        return (
            <form
                className="form"
                name="signupForm"
                autoComplete="off"
                onSubmit={this.handleSubmit}
            >
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
                            customclass="custom-input"
                            id="username"
                            name="name"
                            onChange={this.handleChange}
                        />
                        <CustomInput
                            label="Your Email"
                            type="email"
                            customclass="custom-input"
                            id="signup__email"
                            name="email"
                            onChange={this.handleChange}
                        />
                        <CustomInput
                            label="Password"
                            type="password"
                            customclass="custom-input"
                            id="signup__password"
                            name="password"
                            onChange={this.handleChange}
                        />
                        <div className="footer">
                            <button type="submit" onClick={this.handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;
