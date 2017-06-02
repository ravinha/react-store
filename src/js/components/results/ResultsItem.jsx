import React from "react";
import Label from "../custom/Label.jsx";
import RatingLayout from "./RatingLayout.jsx";

export default class ResultsItem extends React.Component {


	render() {
		return (
			<div className="ResultsItem">
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
