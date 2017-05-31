import React from "react";

export default class Label extends React.Component {


    render() {
        var color = this.props.color === "dark" ? "Label__dark" : "Label";
        var bold = this.props.bold ? " Label__bold" : "";
        return (
            <div className={color + bold}>
                {this.props.content}
            </div>
        );
    }
}
