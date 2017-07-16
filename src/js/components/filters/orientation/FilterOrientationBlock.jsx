import React from "react";
import FilterBlockHeader from "../FilterBlockHeader.jsx";
import FilterOrientationRectangle from "./FilterOrientationRectangle.jsx";

const FilterOrientationBlock = ({filters, activateFilter}) => {
    return (
        <div className="FilterBlock">
            <FilterBlockHeader title="Orientation"/>
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
        </div>
    );
};
export default FilterOrientationBlock;