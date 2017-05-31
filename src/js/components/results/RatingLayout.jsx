import React from "react";

export default class RatingLayout extends React.Component {


    render() {
        // TODO generic
        var heartIconPath = this.props.isFavorite ? "RedHeart" : "GreyHeart";
        return (
            <div className="RatingLayout">
                {
                    [...Array(this.props.rating).keys()].map((row, i) =>
                        <img key={i} className="RatingStar" src={require('../../../resources/icons/YellowStar.png')}
                             onClick={this.onUnchecked}/>
                    )
                }
                {
                    [...Array(5 - this.props.rating).keys()].map((row, i) =>
                        <img key={i} className="RatingStar" src={require('../../../resources/icons/GreyStar.png')}
                             onClick={this.onUnchecked}/>
                    )
                }
                <img className="Heart" src={require(`../../../resources/icons/${heartIconPath}.png`)}
                     onClick={this.onUnchecked}/>
            </div>
        );
    }
}
