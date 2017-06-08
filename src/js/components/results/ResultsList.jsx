import React from "react";
import * as ArrayUtils from "../../util/ArrayUtil";
import ResultsItem from "./ResultsItem.jsx";

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
        var booksOffset = (this.props.pageNumber - 1) * this.props.itemsPerPage;
        var booksLeft = (this.props.books.length - booksOffset);
        var booksPerPage = this.props.isLastPage ? booksLeft : this.props.itemsPerPage;
        return (
            <div className="ResultsList">
                {
                    ArrayUtils.getNextNumbers(booksPerPage)
                        .map((row, i) => {
                                return <ResultsItem
                                    key={i}
                                    mark={this.mark}
                                    index={booksOffset + row}
                                    columns={this.props.columns}
                                    marked={booksOffset + row === this.state.marked}
                                    book={this.props.books[booksOffset + row]}
                                />
                            }
                        )
                }
            </div>
        );
    }
}
