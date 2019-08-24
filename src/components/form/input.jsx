import React, { Component } from "react";

class CustomInput extends Component {
    state = {};
    getClass(props) {
        return `mdc-text-field mdc-text-field--outlined ${
            props.customclass ? props.customclass : ""
        }`;
    }
    render() {
        return (
            <div className={this.getClass(this.props)}>
                <input className="mdc-text-field__input" {...this.props} />
                <div className="mdc-notched-outline">
                    <div className="mdc-notched-outline__leading" />
                    <div className="mdc-notched-outline__notch">
                        <label
                            htmlFor="tf-outlined"
                            className="mdc-floating-label"
                        >
                            {this.props.label}
                        </label>
                    </div>
                    <div className="mdc-notched-outline__trailing" />
                </div>
            </div>
        );
    }
}

export default CustomInput;
