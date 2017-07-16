import React from "react";
import Label from "../custom/Label.jsx";
import FilterBox from "./FilterBox.jsx";

const ResultsFilterBar = ({filtersChosen}) => {
    return (
        <div className="ResultsFilterBar">
            <Label
                color="dark"
                bold={true}
                className="margin"
                content="Showing Filters:"/>
            {
                filtersChosen.map((filter, i) =>
                    <FilterBox
                        key={i+"_"+filter.hash}
                        name={filter.item}
                    />
                )
            }
        </div>
    );
};
export default ResultsFilterBar;