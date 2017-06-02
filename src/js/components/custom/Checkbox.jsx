import React from "react";

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
        var iconName = this.state.checked ? "checkbox_checked.png" : "checkbox_unchecked.png";
        return (
            <div className="CheckBox">
                <img src={require(`../../../resources/icons/${iconName}`)} onClick={this.onStateChanged}/>
            </div>
        );
    }
}
