import React from "react";
import ResultsHeader from "./ResultsHeader.jsx";
import ResultsFilterBar from "./ResultsFilterBar.jsx";
import ResultsList from "./ResultsList.jsx";

export default class ResultsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: 4,
            itemsPerPage: 20,
            pageNumber: 1
        }
    }

    render() {
        var filtersChosen = this.props.filters.size.concat(
            this.props.filters.favorites,
            this.props.filters.industry,
            this.props.filters.style
        ).filter(filter => filter.chosen);
        return (
            <div className="ResultsView">
                <ResultsHeader
                    count={this.props.books.length}
                />
                <ResultsFilterBar
                    filtersChosen={filtersChosen}
                />
                <ResultsList
                    itemsPerPage={this.state.itemsPerPage}
                    pageNumber={this.state.pageNumber}
                    columns={this.state.columns}
                    books={this.props.books}
                />
                {/*<ResultsFooter/>*/}
            </div>
        );
    }
}
