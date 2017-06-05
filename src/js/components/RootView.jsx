import React from "react";
import FiltersView from "./filters/FiltersView.jsx";
import ResultsView from "./results/ResultsView.jsx";
import DataUtil from "../util/DataUtil";

export default class RootView extends React.Component {

    constructor(props) {
        super(props);
        this.activateFilter = this.activateFilter.bind(this);
        this.filterBooks = this.filterBooks.bind(this);
        var initialModel = DataUtil.getModel();
        var filters = DataUtil.getFilters(initialModel);
        var filteredBooks = this.filterBooks(initialModel, filters);
        this.state = {
            initialModel: initialModel,
            filteredBooks: filteredBooks,
            filters: filters
        }
    }

    filterBooks(initialModel, filters) {
        var favoriteFilters = filters.favorites.filter(filter => filter.chosen);
        var industryFilters = filters.industry.filter(filter => filter.chosen);
        var sizeFilters = filters.size.filter(filter => filter.chosen);
        var styleFilters = filters.style.filter(filter => filter.chosen);
        var orientationFilters = filters.orientation.filter(filter => filter.chosen);
        var ratingFilters = filters.rating.filter(filter => filter.chosen);

        return initialModel.books.filter(book => {
            return (
                (favoriteFilters.length === 0 || favoriteFilters.some(filter => book.isFavorite)) &&
                (industryFilters.length === 0 || industryFilters.some(filter => filter.item === book.industry || filter.item === "All")) &&
                (sizeFilters.length === 0 || sizeFilters.some(filter => filter.item === book.size)) &&
                (styleFilters.length === 0 || styleFilters.some(filter => filter.item === book.style || filter.item === "All")) &&
                (orientationFilters.length === 0 || orientationFilters.some(filter => filter.item === book.orientation)) &&
                (ratingFilters.length === 0 || ratingFilters.some(filter => filter.item === book.rating))
            )
        });
    }

    activateFilter(filtersBlockName, filtersBlock, filter) {
        for (var i = 0; i < filtersBlock.length; i++) {
            if (filtersBlock[i].item === filter.item) {
                filtersBlock[i].chosen = !filtersBlock[i].chosen;
                break;
            }
        }
        var newFilters = this.state.filters;
        newFilters[`${filtersBlockName}`] = filtersBlock;

        var filteredBooks = this.filterBooks(this.state.initialModel, newFilters);

        this.setState({
            filters: newFilters,
            filteredBooks
        })
    }

    render() {
        return (
            <div className="RootView">
                <FiltersView
                    filters={this.state.filters}
                    activateFilter={this.activateFilter}
                />
                <ResultsView
                    books={this.state.filteredBooks}
                    filters={this.state.filters}
                />
            </div>
        );
    }
}
