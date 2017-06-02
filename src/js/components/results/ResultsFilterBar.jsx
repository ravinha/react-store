import React from "react";
import Label from "../custom/Label.jsx";
import FilterBox from "./FilterBox.jsx";

export default class ResultsFilterBar extends React.Component {


    render() {
        return (
            <div className="ResultsFilterBar">
                <Label
                    color="dark"
                    bold={true}
                    className="margin"
                    content="Showing Filters:"/>
                {
                    this.props.filtersChosen.map((filter, i) =>
                        <FilterBox
                            key={i}
                            name={filter.item}
                        />
                    )
                }
            </div>
        );
    }
}
