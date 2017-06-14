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
            pageNumber      //pageNumber: pageNumber
        })
    }

    selectItemsPerPage(itemsPerPage) {
        this.setState({
            pageNumber: 1,
            itemsPerPage        //itemsPerPage: itemPerPage
        })
    }

    selectColumns(columns) {
        this.setState({
            columns         //columns: columnsCount
        })
    }

    render() {
        //do tego jakieś generyczne rozwiązanie, ten komponent wcale nie musi wiedzieć jakie filtry są dostępne
        var filtersChosen = this.props.filters.find(f => f.name === "Size").properties.concat(
            this.props.filters.find(f => f.name === "Favorites").properties,
            this.props.filters.find(f => f.name === "Industry").properties,
            this.props.filters.find(f => f.name === "Style").properties,
            this.props.filters.find(f => f.name === "Orientation").properties,
            this.props.filters.find(f => f.name === "Rating").properties,
            this.props.filters.find(f => f.name === "Color").properties
        ).filter(filter => filter.chosen);

        //"All" jako const
        var itemsPerPageNumber = this.state.itemsPerPage === "All" ? this.props.books.length : this.state.itemsPerPage;
        var maxPages = Math.ceil(this.props.books.length / itemsPerPageNumber); //maxPagesCount

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
                    itemsPerPage={itemsPerPageNumber}
                    pageNumber={this.state.pageNumber}
                    isLastPage={maxPages === this.state.pageNumber || maxPages === 0}
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
