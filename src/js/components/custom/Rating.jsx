import React from "react";
import * as ArrayUtil from "../../util/ArrayUtil";

const Rating = ({rating, maxRating}) => {

    let getStarImg = (row) => {
        return row < rating ? "YellowStar" : "GreyStar";
    };

    return (
        <div className="Rating">
            {
                ArrayUtil.getNextNumbers(maxRating).map((row, i) =>
                    <img
                        key={i} className="RatingStar"
                        src={require(`../../../resources/icons/${getStarImg(row)}.png`)}
                    />
                )
            }
        </div>
    );
};

export default Rating;
