import React from "react";
import * as ArrayUtils from "../../util/ArrayUtil";

export default class LayoutSelector extends React.Component {

    constructor(props) {
        super(props);
        this.selectColumns = this.selectColumns.bind(this);
        this.onMouseEnterLeave = this.onMouseEnterLeave.bind(this);
        this.state = {
            entered: this.props.selected
        }
    }

    componentWillReceiveProps(nextProps){
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
        var enteredClass = this.state.entered ? " EnteredLayout" : "";
        return (
            <div
                className={`LayoutSelector${enteredClass}`}
                onClick={this.selectColumns}
                onMouseEnter={() => this.onMouseEnterLeave(true)}
                onMouseLeave={() => this.onMouseEnterLeave(false)}
            >
                {
                    ArrayUtils.getNextNumbers(this.props.columns).map((row, i) =>
                        <div
                            key={i}
                            className="LayoutSelector__row">
                            {
                                ArrayUtils.getNextNumbers(this.props.columns).map((row,j) =>
                                    <div
                                        key={j}
                                        className="LayoutSelector__rectangle"/>
                                )
                            }
                        </div>
                    )
                }
            </div>
        );
    }
}
