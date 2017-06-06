import React from "react";
import FilterOrientationRectangle from "./FilterOrientationRectangle.jsx";

const FilterOrientationRow = ({filters, activateFilter}) => {
    return (
        <div className="FilterOrientationRow">
            {
                filters.map((filter, i) =>
                    <FilterOrientationRectangle
                        key={i}
                        checked={filter.chosen}
                        className={`${filter.item}Rectangle`}
                        content={`${filter.item}`}
                        onStateChanged={() => activateFilter(`${filter.item}`)}
                    />
                )
            }
        </div>
    );
};

export default FilterOrientationRow;