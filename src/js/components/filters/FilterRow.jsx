import React from "react";
import Checkbox from "../custom/Checkbox.jsx";

export default class FilterRow extends React.Component {


    render() {
        return (
            <div className="FilterRow">
                <Checkbox
                    isChecked={this.props.chosen}
                />
                <strong className="ResultsLabel">{this.props.item}</strong>
                <strong className="ResultsCount">{this.props.count}</strong>
            </div>
        );
    }
}
