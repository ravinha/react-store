import React from "react";
import Label from "../custom/Label.jsx";
import LayoutSelector from "../custom/LayoutSelector.jsx";

export default class ResultsHeader extends React.Component {


	render() {
		return (
			<div className="ResultsHeader">
				<Label
					color="dark"
					bold={true}
					content={`Search Results: `}
				/>
				<Label content={`${this.props.count}`}/>
				<select name="Show:">
					<option value="40">40</option>
					<option value="80">80</option>
					<option value="All">All</option>
				</select>
				<LayoutSelector rows={4}/>
				<LayoutSelector rows={3}/>
				<LayoutSelector rows={2}/>
			</div>
		);
	}
}
