import React from "react";

export default class ColorRow extends React.Component {

    render() {
        var colors = [1,2,3,4,5];
        return (
            <div className="ColorRow">
                {
                    colors.map((color,i)=>
                        <div
                            key={i}
                            className={`${this.props.type}__${color}`}/>
                    )
                }
            </div>
        );
    }
}
