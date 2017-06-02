import React from "react";
import FilterBlock from "./FilterBlock.jsx";
import FilterOrientationBlock from "./orientation/FilterOrientationBlock.jsx";
import FilterColorBlock from "./color/FilterColorBlock.jsx";
import Label from "../custom/Label.jsx";

export default class FiltersView extends React.Component {

    render() {
        var filters = this.props.filters;
        return (
            <div className="FiltersView">
                <Label
                    color="dark"
                    bold={true}
                    className="big"
                    content="Narrow results"
                />
                <FilterOrientationBlock
                    filters={filters.orientation}
                    activateFilter={(filterItem) => this.props.activateFilter("orientation", filters.orientation, filters.orientation.find(filter => filter.item === filterItem))}
                />
                <FilterBlock
                    title="Size"
                    filters={filters.size}
                    activateFilter={(filter) => this.props.activateFilter("size", filters.size, filter)}
                />
                {/*<FilterBlock*/}
                {/*title="Customer Rating"*/}
                {/*/>*/}
                <FilterBlock
                    title="Favorite"
                    filters={filters.favorites}
                    activateFilter={(filter) => this.props.activateFilter("favorites", filters.favorites, filter)}
                />
                <FilterBlock
                    title="Industry"
                    filters={filters.industry}
                    activateFilter={(filter) => this.props.activateFilter("industry", filters.industry, filter)}
                />
                <FilterColorBlock/>
                <FilterBlock
                    title="Style"
                    filters={filters.style}
                    activateFilter={(filter) => this.props.activateFilter("style", filters.style, filter)}
                />
            </div>
        );
    }
}
