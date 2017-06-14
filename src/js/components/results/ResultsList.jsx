import React from "react";
import * as ArrayUtils from "../../util/ArrayUtil";
import ResultsItem from "./ResultsItem.jsx";

export default class ResultsList extends React.Component {

    constructor(props) {
        super(props);
        this.mark = this.mark.bind(this);
        this.state = {
            marked: -1      //nie wiadomo do czego służy. To jest do hovera? Wtedy stylowanie jako css
        }
    }

    mark(id) {
        this.setState({
            marked: id
        });
    }

    render() {
		/**
         * tak jak wspominałem tutaj powinniśmy dostać już spaginowane książki z ResultView (tam powinna nastąpić taka logika)
		 */
		var booksOffset = (this.props.pageNumber - 1) * this.props.itemsPerPage;
        var booksLeft = (this.props.books.length - booksOffset);
        var booksPerPage = this.props.isLastPage ? booksLeft : this.props.itemsPerPage;

        return (
            <div className="ResultsList">
                { //tutaj od razu mógłbyś pisać ArrayUtils... - oszczędzasz wtedy miejsce i dalej jest czytelnie
                    ArrayUtils.getNextNumbers(booksPerPage)
                        .map((row, i) => {
                                return <ResultsItem
                                    key={i} //staraj się klucze nie opierac o samo i
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
