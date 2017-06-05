import React from "react";
import Label from "../custom/Label.jsx";
import RatingLayout from "./RatingLayout.jsx";

export default class ResultsItem extends React.Component {

    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click() {
        if(this.props.marked){
            this.props.mark(-1)
        } else {
            this.props.mark(this.props.index)
        }
    }

    render() {
        var markedClassName = this.props.marked? " Marked":"";
        return (
            <div className={`ResultsItem${markedClassName}`} onClick={this.click}>
                <img
                    className="BookImg"
                    src={require(`../../../resources/icons/${this.props.book.icon}`)}/>
                <RatingLayout
                    rating={this.props.book.rating}
                    isFavorite={this.props.book.isFavorite}
                />
                <Label
                    bold={true}
                    color="dark"
                    className={this.props.marked ? "marked" : ""}
                    content={this.props.book.title}/>
                <Label
                    bold={true}
                    color="dark"
                    className="small"
                    content={this.props.book.size}/>
            </div>
        );
    }
}
