import React from "react";
import FilterBlockHeader from "../FilterBlockHeader.jsx";
import ColorRow from "./ColorRow.jsx";

export default class FilterColorBlock extends React.Component {

    render() {
        return (
            <div className="FilterBlock">
                <FilterBlockHeader title="Color" subTitle="Choose color(s)"/>
                <ColorRow/>
            </div>
        );
    }
}
