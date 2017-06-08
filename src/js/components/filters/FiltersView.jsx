import React from "react";
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
            {
                filters.map((filter, i) => {
                    return filter.component(activateFilter, filter.properties, filter.name, i)
                })
            }
        </div>
    );
};

export default FiltersView;
