import React from "react";
import FiltersView from "./filters/FiltersView.jsx";
import ResultsView from "./results/ResultsView.jsx";
import DataUtil from "../util/DataUtil";

export default class RootView extends React.Component {

    constructor(props){
        super(props);
		this.state = {
        	model: DataUtil.getModel()
		}
    }

	render() {
		return (
			<div className="RootView">
				<FiltersView/>
				<ResultsView
					books={this.state.model.books}
				/>
			</div>
		);
	}
}
