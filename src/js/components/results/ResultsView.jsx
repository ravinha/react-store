import React from "react";
import ResultsHeader from "./ResultsHeader.jsx";
import ResultsFilterBar from "./ResultsFilterBar.jsx";
import ResultsList from "./ResultsList.jsx";
import ResultsFooter from "./ResultsFooter.jsx";

export default class ResultsView extends React.Component {

    constructor(props) {
        super(props);
        this.selectPage = this.selectPage.bind(this);
        this.selectItemsPerPage = this.selectItemsPerPage.bind(this);
        this.selectColumns = this.selectColumns.bind(this);
        this.state = {
            columns: 4,
            itemsPerPage: 20,
            pageNumber: 1
        }
    }

    selectPage(pageNumber) {
        this.setState({
            pageNumber
        })
    }

    selectItemsPerPage(itemsPerPage) {
        if(itemsPerPage === "All"){
            this.setState({
                itemsPerPage: this.props.books.length
            })
        } else {
            this.setState({
                itemsPerPage
            })
        }
    }

    selectColumns(columns) {
        this.setState({
            columns
        })
    }

    render() {
        var filtersChosen = this.props.filters.size.concat(
            this.props.filters.favorites,
            this.props.filters.industry,
            this.props.filters.style
        ).filter(filter => filter.chosen);

        var maxPages = Math.ceil(this.props.books.length / this.state.itemsPerPage);
        return (
            <div className="ResultsView">
                <ResultsHeader
                    count={this.props.books.length}
                    columns={this.state.columns}
                    selectItemsPerPage={this.selectItemsPerPage}
                    selectColumns={this.selectColumns}
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
                <ResultsFooter
                    page={this.state.pageNumber}
                    max={maxPages}
                    selectPage={this.selectPage}
                />
            </div>
        );
    }
}
