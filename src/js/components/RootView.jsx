import React from "react";
import FiltersView from "./filters/FiltersView.jsx";
import ResultsView from "./results/ResultsView.jsx";
import DataUtil from "../util/DataUtil.jsx";

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
        //lepiej nie używać skrótowych zmiennych (jak f)
        //warto używać constów przy takich wartościach
        //warto czasami rozbijać takie konstrukcje na kolejne linie

		/**
         * wydaje mi się, że mógłbyś zrobić tą metodę generyczną bez określania dostępnych filtrów. Niech iteruje po tej liście
         * oczywiście z zachowaniem, że jeżeli filtr nie ma wartości albo wartość "All" to pokazuje wszystkie
		 */
		var favoriteFilters = filters.find(f => f.name === "Favorites").properties.filter(filter => filter.chosen);
        var industryFilters = filters.find(f => f.name === "Industry").properties.filter(filter => filter.chosen);
        var sizeFilters = filters.find(f => f.name === "Size").properties.filter(filter => filter.chosen);
        var styleFilters = filters.find(f => f.name === "Style").properties.filter(filter => filter.chosen);
        var orientationFilters = filters.find(f => f.name === "Orientation").properties.filter(filter => filter.chosen);
        var ratingFilters = filters.find(f => f.name === "Rating").properties.filter(filter => filter.chosen);
        var colorFilters = filters.find(f => f.name === "Color").properties.filter(filter => filter.chosen);

        return initialModel.books.filter(book => {
            return (
                (favoriteFilters.length === 0 || favoriteFilters.some(filter => book.isFavorite)) &&
                (industryFilters.length === 0 || industryFilters.some(filter => filter.item === book.industry || filter.item === "All")) &&
                (sizeFilters.length === 0 || sizeFilters.some(filter => filter.item === book.size)) &&
                (styleFilters.length === 0 || styleFilters.some(filter => filter.item === book.style || filter.item === "All")) &&
                (orientationFilters.length === 0 || orientationFilters.some(filter => filter.item === book.orientation)) &&
                (ratingFilters.length === 0 || ratingFilters.some(filter => filter.item === book.rating)) &&
                (colorFilters.length === 0 || colorFilters.some(filter => filter.item === book.color))
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
        newFilters.find(f => f.name === filtersBlockName).properties = filtersBlock;

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
