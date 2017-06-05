import React from "react";
import Label from "../../custom/Label.jsx";

export default class FilterOrientationRectangle extends React.Component {

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
        var checkStyle = this.state.checked ? " OrientationChecked" : "";
        return (
            <div
                onClick={this.onStateChanged}
                className={`FilterOrientationRectangle ${this.props.className}`}>
                <div className={`RectangleDiv${checkStyle}`}>
                    {  this.state.checked && <img src={require(`../../../../resources/icons/Check.png`)}/>  }
                </div>
                <Label
                    color="dark"
                    content={this.props.content}/>
            </div>
        );
    }
}
