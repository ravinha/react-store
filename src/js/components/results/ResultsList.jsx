import React from "react";
import ResultsItem from "./ResultsItem.jsx";

export default class ResultsList extends React.Component {


    render() {
        var rows = Math.floor((this.props.books.length - (this.props.pageNumber - 1) * this.props.itemsPerPage) / this.props.columns);
        var lastRowBooksCount = (this.props.books.length - (this.props.pageNumber - 1) * this.props.itemsPerPage) % this.props.columns;
        var maxRowsPerPage = this.props.itemsPerPage / this.props.columns;
        return (
            <div className="ResultsList">
                {
                    [...Array(rows > maxRowsPerPage ? maxRowsPerPage : rows).keys()].map((row, i) =>
                        <div
                            key={i}
                            className="ResultsList__row">
                            {
                                [...Array(this.props.columns).keys()].map((column, j) =>
                                    <ResultsItem
                                        key={j}
                                        className="LayoutSelector__rectangle__unchecked"
                                        book={this.props.books[(this.props.pageNumber - 1) * this.props.itemsPerPage + row * this.props.columns + column]}
                                    />
                                )
                            }
                        </div>
                    )
                }
                <div className="ResultsList__row">
                    {
                        [...Array(rows > maxRowsPerPage? 0 : lastRowBooksCount).keys()].map((column, j) =>
                            <ResultsItem
                                key={j}
                                className="LayoutSelector__rectangle__unchecked"
                                book={this.props.books[(this.props.pageNumber - 1) * this.props.itemsPerPage + rows * this.props.columns + column]}
                            />
                        )
                    }
                </div>
            </div>
        );
    }
}
