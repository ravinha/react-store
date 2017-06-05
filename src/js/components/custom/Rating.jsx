import React from "react";
import * as ArrayUtil from "../../util/ArrayUtil";

export default class Rating extends React.Component {


    render() {
        let getStarImg = (row) => {
            return row < this.props.rating ? "YellowStar" : "GreyStar";
        };

        return (
            <div className="Rating">
                {
                    ArrayUtil.getNextNumbers(5).map((row, i) =>
                        <img key={i} className="RatingStar"
                             src={require(`../../../resources/icons/${getStarImg(row)}.png`)}/>
                    )
                }
            </div>
        );
    }
}
