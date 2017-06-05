import React from "react";
import Rating from "../custom/Rating.jsx";

export default class RatingLayout extends React.Component {


    render() {
        var heartIconPath = this.props.isFavorite ? "RedHeart" : "GreyHeart";
        return (
            <div className="RatingLayout">
                <Rating rating={this.props.rating}/>
                <img className="Heart" src={require(`../../../resources/icons/${heartIconPath}.png`)}/>
            </div>
        );
    }
}
