import React from "react";
import Label from "../custom/Label.jsx";

export default class PageBlock extends React.Component {

    constructor(props) {
        super(props);
        this.selectPage = this.selectPage.bind(this);
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
        })
    }

    selectPage() {
        if (this.props.page.clickable) {
            this.props.selectPage(this.props.page.number);
        }
    }

    render() {
        var enteredClass = this.state.entered ? " EnteredBlock" : "";
        return (
            <div
                className={`PageBlock${enteredClass}`}
                onClick={this.selectPage}
                onMouseEnter={() => this.onMouseEnterLeave(true)}
                onMouseLeave={() => this.onMouseEnterLeave(false)}>
                <Label
                    className={this.props.className}
                    content={this.props.page.number}
                />
            </div>
        );
    }
}
