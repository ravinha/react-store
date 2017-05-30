import React from "react";
import FilterBlockHeader from "../FilterBlockHeader.jsx";
import ColorRow from "./ColorRow.jsx";

export default class FilterColorBlock extends React.Component {

    render() {
        return (
            <div className="FilterColorBlock">
                <FilterBlockHeader title="Color" subtitle="Choose color(s)"/>
                <ColorRow type="Upper"/>
                <ColorRow type="Lower"/>
            </div>
        );
    }
}
