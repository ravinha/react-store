import React from "react";
import FilterBlockHeader from "../FilterBlockHeader.jsx";
import FilterOrientationRow from "./FilterOrientationRow.jsx";

/**
 * mógłbyś zrezygnować z FilterOrientationRow i całą logikę zawszeć tutaj. Nie ma sensu rozdrabniać aplikacji na takie cząstki
 * ciężko potem to edytować
 */
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