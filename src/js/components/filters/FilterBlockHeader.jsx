import React from "react";

export default class FilterBlockHeader extends React.Component {


	render() {
		return (
			<div className="FiltersBlockHeader">
				<h1 className="FiltersBlockHeader__title">{this.props.title}</h1>
				<img src={require('../../../resources/icons/close_mark.png')} alt="boohoo" className="FiltersBlockHeader__close"/>
			</div>
		);
	}
}
