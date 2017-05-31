import React from "react";
import ColorFilter from "./ColorFilter.jsx";

export default class ColorRow extends React.Component {

    render() {
        //TODO ARRAY OF N numbers as Util
        var colors = [1, 2, 3, 4, 5];
        return (
            <div className="ColorRow">
                {
                    colors.map((color, i) =>
                        <ColorFilter
                            key={i}
                            color={color}
                            type={this.props.type}
                        />
                    )
                }
            </div>
        );
    }
}
