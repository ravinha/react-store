import React from "react";
import FilterOrientationRectangle from "./FilterOrientationRectangle.jsx";

export default class FilterOrientationRow extends React.Component {

    render() {
        return (
            <div className="FilterOrientationRow">
                <FilterOrientationRectangle
                    className="HorizontalRectangle"
                    content="horizontal"
                />
                <FilterOrientationRectangle
                    className="VerticalRectangle"
                    content="vertical"
                />
            </div>
        );
    }
}
