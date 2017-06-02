import React from "react";

export default class Label extends React.Component {


    render() {
        var color = this.props.color === "dark" ? "Label__dark" : "Label";
        var bold = this.props.bold ? " Label__bold" : "";
        var className = this.props.className ? " Label__" + this.props.className : "";
        return (
            <div className={color + bold + className}>
                {this.props.content}
            </div>
        );
    }
}
