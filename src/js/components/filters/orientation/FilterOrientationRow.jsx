import React from "react";
import FilterOrientationRectangle from "./FilterOrientationRectangle.jsx";

export default class FilterOrientationRow extends React.Component {

    render() {
        return (
            <div className="FilterOrientationRow">
                {
                    this.props.filters.map((filter, i) =>
                        <FilterOrientationRectangle
                            key={i}
                            checked={filter.chosen}
                            className={`${filter.item}Rectangle`}
                            content={`${filter.item}`}
                            onStateChanged={() => this.props.activateFilter(`${filter.item}`)}
                        />
                    )
                }
            </div>
        );
    }
}
