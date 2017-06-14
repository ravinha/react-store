import React from "react";
import Label from "../custom/Label.jsx";
import RatingLayout from "./RatingLayout.jsx";

export default class ResultsItem extends React.Component {

    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click() {
        if (this.props.marked) {
            this.props.mark(-1)
        } else {
            this.props.mark(this.props.index)
        }

        //da się napisać to w jednej linijce :)
        //zmień też nazwę. Samo click nie mówi nic
    }

    render() {
        var markedClassName = this.props.marked ? " Marked" : "";
        return (
            <div className={`ResultsItem__${this.props.columns}${markedClassName}`} onClick={this.click}>   //użyj classname z npm'a
                <img
                    className="BookImg"
                    src={require(`../../../resources/icons/${this.props.book.icon}`)}/> //brakuje alt'a
                <RatingLayout
                    rating={this.props.book.rating}
                    isFavorite={this.props.book.isFavorite}
                />
                <Label
                    bold={true}
                    color="dark"
                    className={this.props.marked ? "marked" : ""}
                    content={this.props.book.title}
                />
                <Label
                    bold={true}
                    color="dark"
                    className="small"
                    content={this.props.book.size}
                />
            </div>
        );
    }
}
