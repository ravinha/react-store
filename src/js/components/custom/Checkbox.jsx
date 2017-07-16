import React from "react";
import classNames from "classnames"

export default class Checkbox extends React.Component {

    constructor(props) {
        super(props);
        this.onStateChanged = this.onStateChanged.bind(this);
        this.state = {
            checked: this.props.checked
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.checked
        });
    }

    onStateChanged() {
        this.setState({
            checked: !this.state.checked
        });
        this.props.onStateChanged()
    }

    render() {
        var iconName = classNames({
            'checkbox_checked.png': this.state.checked,
            'checkbox_unchecked.png': !this.state.checked
        });
        return (
            <div className="CheckBox">
                <img src={require(`../../../resources/icons/${iconName}`)} onClick={this.onStateChanged}/>
            </div>
        );
    }
}
