import React from "react";
import ResultsHeader from "./ResultsHeader.jsx";
import ResultsList from "./ResultsList.jsx";
import ResultsFooter from "./ResultsFooter.jsx";

export default class ResultsView extends React.Component {

	render() {
		return (
			<div className="ResultsView">
				<ResultsHeader
					count={this.props.books.length}
				/>
				{/*<ResultsList/>*/}
				{/*<ResultsFooter/>*/}
			</div>
		);
	}
}
