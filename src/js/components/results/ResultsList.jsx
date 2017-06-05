import React from "react";
import ResultsItem from "./ResultsItem.jsx";
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
        var rows = Math.floor((this.props.books.length - (this.props.pageNumber - 1) * this.props.itemsPerPage) / this.props.columns);
        var lastRowBooksCount = (this.props.books.length - (this.props.pageNumber - 1) * this.props.itemsPerPage) % this.props.columns;
        var maxRowsPerPage = Math.floor(this.props.itemsPerPage / this.props.columns);
        return (
            <div className="ResultsList">
                {
                    ArrayUtils.getNextNumbers(rows > maxRowsPerPage ? maxRowsPerPage : rows).map((row, i) =>
                        <div
                            key={i}
                            className="ResultsList__row">
                            {
                                ArrayUtils.getNextNumbers(this.props.columns).map((column, j) => {
                                        var currentBookIndex = (this.props.pageNumber - 1) * this.props.itemsPerPage + row * this.props.columns + column;
                                        return <ResultsItem
                                            key={j}
                                            mark={this.mark}
                                            index={currentBookIndex}
                                            marked={currentBookIndex === this.state.marked}
                                            className="ResultsList__rectangle__unchecked"
                                            book={this.props.books[currentBookIndex]}
                                        />
                                    }
                                )
                            }
                        </div>
                    )
                }
                <div className="ResultsList__row">
                    {
                        ArrayUtils.getNextNumbers(rows > maxRowsPerPage ? 0 : lastRowBooksCount).map((column, j) => {
                                var currentBookIndex = (this.props.pageNumber - 1) * this.props.itemsPerPage + rows * this.props.columns + column;
                                return <ResultsItem
                                    key={j}
                                    mark={this.mark}
                                    index={currentBookIndex}
                                    marked={currentBookIndex === this.state.marked}
                                    className="ResultsList__rectangle__unchecked"
                                    book={this.props.books[currentBookIndex]}
                                />
                            }
                        )
                    }
                </div>
            </div>
        );
    }
}
