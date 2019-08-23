import React, { Component } from "react";

class CustomInput extends Component {
    state = {};
    getClass(props) {
        return `mdc-text-field mdc-text-field--outlined ${
            props.customClass ? props.customClass : ""
        }`;
    }
    render() {
        return (
            <div className={this.getClass(this.props)}>
                <input
                    type={this.props.type}
                    id="tf-outlined"
                    className="mdc-text-field__input"
                />
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
