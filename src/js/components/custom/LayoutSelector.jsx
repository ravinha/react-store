import React from "react";
import * as ArrayUtils from "../../util/ArrayUtil";
import classNames from "classnames";

export default class LayoutSelector extends React.Component {

    constructor(props) {
        super(props);
        this.selectColumns = this.selectColumns.bind(this);
        this.onMouseEnterLeave = this.onMouseEnterLeave.bind(this);
        this.state = {
            entered: this.props.selected
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            entered: nextProps.selected
        })
    }

    onMouseEnterLeave(entered) {
        this.setState({
            entered: this.props.selected || entered
        });
    }

    selectColumns() {
        if (!this.props.selected) {
            this.props.selectColumns(this.props.columns);
        }
    }

    render() {
        var size = 25;
        var columns = this.props.columns;
        var sizeSqWithBorder = size / columns;
        var sizeSq = sizeSqWithBorder * 3 / 5;

        var fillClassName = classNames(
            {
                "#56C47A": this.state.entered,
                "#000000": !this.state.entered
            }
        );


        return (
            <div
                className={`LayoutSelector`}
                onClick={this.selectColumns}
                onMouseEnter={() => this.onMouseEnterLeave(true)}
                onMouseLeave={() => this.onMouseEnterLeave(false)}
            >
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <title>background</title>
                        <rect fill="#fff" id="canvas_background" height={size + 2} width={size + 2} y="-1" x="-1"/>
                        <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                            <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%"/>
                        </g>
                    </g>
                    <g>
                        <title>Layer 1</title>
                        {
                            ArrayUtils.getNextNumbers(columns * columns).map((square, i) =>
                                <rect
                                    key={i}
                                    stroke="#000" id="svg_4"
                                    height={sizeSq}
                                    width={sizeSq}
                                    y={(Math.floor(square / columns)) * sizeSqWithBorder}
                                    x={(square % columns) * sizeSqWithBorder}
                                    fill={fillClassName}/>
                            )
                        }
                    </g>
                </svg>
            </div>
        );
    }
}
