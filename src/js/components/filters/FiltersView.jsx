import React from "react";
import FilterBlock from "./FilterBlock.jsx";
import FilterOrientationBlock from "./orientation/FilterOrientationBlock.jsx";
import FilterColorBlock from "./color/FilterColorBlock.jsx";
import Label from "../custom/Label.jsx";

const FiltersView = ({activateFilter, filters}) => {
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
                activateFilter={(filterItem) => activateFilter("orientation", filters.orientation, filters.orientation.find(filter => filter.item === filterItem))}
            />
            <FilterBlock
                title="Size"
                filters={filters.size}
                activateFilter={(filter) => activateFilter("size", filters.size, filter)}
            />
            <FilterBlock
                title="Customer Rating"
                subTitle="At least"
                type="rating"
                filters={filters.rating}
                activateFilter={(filter) => activateFilter("rating", filters.rating, filter)}
            />
            <FilterBlock
                title="Favorite"
                filters={filters.favorites}
                activateFilter={(filter) => activateFilter("favorites", filters.favorites, filter)}
            />
            <FilterBlock
                title="Industry"
                filters={filters.industry}
                activateFilter={(filter) => activateFilter("industry", filters.industry, filter)}
                visibleFiltersCount={7}
            />
            <FilterColorBlock/>
            <FilterBlock
                title="Style"
                filters={filters.style}
                activateFilter={(filter) => activateFilter("style", filters.style, filter)}
                visibleFiltersCount={9}
            />
        </div>
    );
};

export default FiltersView;
