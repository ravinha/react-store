import React from "react";
import Checkbox from "../custom/Checkbox.jsx";
import Label from "../custom/Label.jsx";
import Rating from "../custom/Rating.jsx";

export default class FilterRow extends React.Component {


    render() {
        return (
            <div className="FilterRow">
                <Checkbox
                    checked={this.props.chosen}
                    onStateChanged={this.props.onStateChanged}
                />
                { this.props.type === "rating" ?
                    <Rating rating={this.props.item}/>
                    :
                    <Label
                        color="dark"
                        content={this.props.item}
                    />
                }
                <Label content={this.props.count}/>
            </div>
        );
    }
}
