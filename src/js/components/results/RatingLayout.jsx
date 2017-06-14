import React from "react";
import Rating from "../custom/Rating.jsx";

/**
 * tej komponent jest zbędny. Umieściłby go od razu w ResultItem
 */
const RatingLayout = ({isFavorite, rating}) => {
    var heartIconPath = isFavorite ? "RedHeart" : "GreyHeart";
    return (
        <div className="RatingLayout">
            <Rating rating={rating}/> //przesyłałbym też maksymalną ocebę
            <img
                className="Heart"
                src={require(`../../../resources/icons/${heartIconPath}.png`)}
            />  //to powinno być komponentem, np. HeartButton z logiką
        </div>
    );
};

export default RatingLayout;