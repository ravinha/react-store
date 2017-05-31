import React from "react";
import FilterBlock from "./FilterBlock.jsx";
import FilterOrientationBlock from "./orientation/FilterOrientationBlock.jsx";
import FilterColorBlock from "./color/FilterColorBlock.jsx";
import * as DataUtil from "../../util/DataUtil";
import Label from "../custom/Label.jsx";

export default class FiltersView extends React.Component {

	render() {
		var filters = DataUtil.getFilters();
		return (
			<div className="FiltersView">
				<Label
					color="dark"
					content="Narrow results"
				/>
				<FilterOrientationBlock/>
				<FilterBlock
					title="Size"
					filters={filters.size}
				/>
				{/*<FilterBlock*/}
					{/*title="Customer Rating"*/}
				{/*/>*/}
				<FilterBlock
					title="Favorite"
					filters={filters.favorites}
				/>
				<FilterBlock
					title="Industry"
					filters={filters.industry}
				/>
				<FilterColorBlock/>
				<FilterBlock
					title="Style"
					filters={filters.style}
				/>
			</div>
		);
	}
}
