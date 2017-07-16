import React from "react";
import Label from "../custom/Label.jsx";
import Rating from "../custom/Rating.jsx";
import classNames from "classnames";

export default class ResultsItem extends React.Component {

    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click() {
        this.props.mark(this.props.marked ? -1 : this.props.index)
    }

    render() {
        var resultsItemClassNames = classNames(
            [`ResultsItem__${this.props.columns}`],
            {'Marked': this.props.marked}
        );
        var heartIconPath = this.props.book.isFavorite ? "RedHeart" : "GreyHeart";
        return (
            <div className={resultsItemClassNames} onClick={this.click}>
                <img
                    className="BookImg"
                    src={require(`../../../resources/icons/${this.props.book.icon}`)}/>
                <div className="RatingLayout">
                    <Rating
                        rating={this.props.book.rating}
                        maxRating={5}
                    />
                    <img
                        className="Heart"
                        src={require(`../../../resources/icons/${heartIconPath}.png`)}
                    />
                </div>
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
