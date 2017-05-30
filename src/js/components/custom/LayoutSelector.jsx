import React from "react";

export default class LayoutSelector extends React.Component {


    render() {
        //TODO decompose
        return (
            <div className="LayoutSelector">
                {
                    [...Array(this.props.rows).keys()].map((row, i) =>
                        <div
                            key={i}
                            className="LayoutSelector__row">
                            {
                                [...Array(this.props.rows).keys()].map((row,j) =>
                                    <div
                                        key={j}
                                        className="LayoutSelector__rectangle__unchecked"/>
                                )
                            }
                        </div>
                    )
                }
            </div>
        );
    }
}
