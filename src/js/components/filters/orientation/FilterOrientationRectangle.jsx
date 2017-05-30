import React from "react";
import Label from "../../custom/Label.jsx";

export default class FilterOrientationRectangle extends React.Component {

    render() {
        return (
            <div className="FilterOrientationRectangle">
                <div className={this.props.className}>
                </div>
                <Label content={this.props.content}/>
            </div>
        );
    }
}
