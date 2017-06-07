import React from "react";
import Rating from "../custom/Rating.jsx";

const RatingLayout = ({isFavorite, rating}) => {
    var heartIconPath = isFavorite ? "RedHeart" : "GreyHeart";
    return (
        <div className="RatingLayout">
            <Rating rating={rating}/>
            <img
                className="Heart"
                src={require(`../../../resources/icons/${heartIconPath}.png`)}
            />
        </div>
    );
};

export default RatingLayout;