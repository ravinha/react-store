import React from "react";

export default class Label extends React.Component {


	render() {
		return (
			<div className="Label">
				<strong>{this.props.content}</strong>
			</div>
		);
	}
}
