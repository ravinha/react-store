import React from "react";
import ResultsRow from "./ResultsRow.jsx";
import * as ArrayUtils from "../../util/ArrayUtil";

export default class ResultsList extends React.Component {

    constructor(props) {
        super(props);
        this.mark = this.mark.bind(this);
        this.state = {
            marked: -1
        }
    }

    mark(id) {
        this.setState({
            marked: id
        });
    }

    render() {
        var booksLeft = (this.props.books.length - (this.props.pageNumber - 1) * this.props.itemsPerPage);
        var rows = Math.ceil(booksLeft / this.props.columns);
        var maxRowsPerPage = Math.ceil(this.props.itemsPerPage / this.props.columns);
        var rowsPerPage = this.props.isLastPage ? rows : maxRowsPerPage;
        var lastRowBooksCount = this.props.isLastPage? booksLeft % this.props.columns : this.props.itemsPerPage % this.props.columns;
        var getColumnCount = (row) => {
            return row === rowsPerPage - 1 && lastRowBooksCount !== 0 ? lastRowBooksCount : this.props.columns
        };
        return (
            <div className="ResultsList">
                {
                    ArrayUtils.getNextNumbers(rowsPerPage).map((row, i) =>
                        <ResultsRow
                            key={i}
                            mark={this.mark}
                            marked={this.state.marked}
                            books={this.props.books}
                            pageNumber={this.props.pageNumber}
                            itemsPerPage={this.props.itemsPerPage}
                            row={row}
                            columns={this.props.columns}
                            getColumnCount={getColumnCount}
                        />
                    )
                }
            </div>
        );
    }
}
