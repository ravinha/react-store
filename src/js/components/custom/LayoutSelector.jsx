import React from "react";

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
        console.log("onMouseEnterLeave")
        this.setState({
            entered: this.props.selected || entered
        });
        console.log("onMouseEnterLeave end")
    }

    selectColumns() {
        console.log("select columns")
        if (!this.props.selected) {
            this.props.selectColumns(this.props.columns);
        }
        console.log("select columns end")
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
                    [...Array(this.props.columns).keys()].map((row, i) =>
                        <div
                            key={i}
                            className="LayoutSelector__row">
                            {
                                [...Array(this.props.columns).keys()].map((row,j) =>
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
