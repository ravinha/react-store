import React from "react";
import FilterBlockHeader from "../FilterBlockHeader.jsx";
import FilterOrientationRow from "./FilterOrientationRow.jsx";

export default class FilterOrientationBlock extends React.Component {

    render() {
        return (
            <div className="FilterBlock">
                <FilterBlockHeader title="Orientation"/>
                <FilterOrientationRow/>
            </div>
        );
    }
}
