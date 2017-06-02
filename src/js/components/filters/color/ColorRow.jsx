import React from "react";
import ColorFilter from "./ColorFilter.jsx";

export default class ColorRow extends React.Component {

    render() {
        //TODO ARRAY OF N numbers as Util
        var colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return (
            <div className="ColorRow">
                {
                    colors.map((color, i) =>
                        <ColorFilter
                            key={i}
                            last={color === 10}
                            color={color}
                            type={this.props.type}
                        />
                    )
                }
            </div>
        );
    }
}
