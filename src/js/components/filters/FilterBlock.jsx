import React from "react";
import FilterBlockHeader from "./FilterBlockHeader.jsx";
import FilterRow from "./FilterRow.jsx";

const FilterBlock = ({title, subTitle = "", type, filters, activateFilter}) => {
    return (
        <div className="FilterBlock">
            <FilterBlockHeader title={title} subTitle={subTitle}/>
            {
                filters.map((filter, i) =>
                    <FilterRow
                        key={i}
                        item={filter.item}
                        type={type}
                        count={filter.count}
                        chosen={filter.chosen}
                        onStateChanged={() => activateFilter(filter)}
                    />
                )
            }
        </div>
    );
}

export default FilterBlock;