import React from "react";
import ColorFilter from "./ColorFilter.jsx";

const ColorRow = ({filters, activateFilter}) => {

    return (
        <div className="ColorRow">
            {
                filters.concat([10]).map((filter, i) =>
                    <ColorFilter
                        key={i}
                        last={i === 9}
                        color={filter.item}
                        checked={filter.chosen}
                        activateFilter={() => activateFilter(filter)}
                    />
                )
            }
        </div>
    );
};
export default ColorRow;