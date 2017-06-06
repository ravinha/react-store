import React from "react";
import ResultsItem from "./ResultsItem.jsx";
import * as ArrayUtils from "../../util/ArrayUtil";

export default class ResultsRow extends React.Component {

    render() {
        return (
            <div
                className="ResultsList__row">
                {
                    ArrayUtils.getNextNumbers(this.props.getColumnCount(this.props.row)).map((column, j) => {
                            var currentBookIndex = (this.props.pageNumber - 1) * this.props.itemsPerPage + this.props.row * this.props.columns + column;
                            return <ResultsItem
                                key={j}
                                mark={this.props.mark}
                                index={currentBookIndex}
                                marked={currentBookIndex === this.props.marked}
                                className="ResultsList__rectangle__unchecked"
                                book={this.props.books[currentBookIndex]}
                            />
                        }
                    )
                }
            </div>
        )
    }
}
