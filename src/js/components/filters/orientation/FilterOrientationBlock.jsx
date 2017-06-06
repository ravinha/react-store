import React from "react";
import FilterBlockHeader from "../FilterBlockHeader.jsx";
import FilterOrientationRow from "./FilterOrientationRow.jsx";

const FilterOrientationBlock = ({filters, activateFilter}) => {
    return (
        <div className="FilterBlock">
            <FilterBlockHeader title="Orientation"/>
            <FilterOrientationRow
                filters={filters}
                activateFilter={activateFilter}
            />
        </div>
    );
};
export default FilterOrientationBlock;