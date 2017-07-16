import React from "react";

export default class ColorFilter extends React.Component {

    constructor(props) {
        super(props);
        this.checkFilter = this.checkFilter.bind(this);
        this.state = {
            checked: this.props.checked
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.checked
        });
    }

    checkFilter() {
        if (!this.props.last) {
            this.setState({
                checked: !this.state.checked
            });
            this.props.activateFilter()
        }
    }

    render() {
        var size = this.state.checked ? "43px" : "50px";
        var margin = this.state.checked ? "auto" : "initial";
        var colorBlockStyle = {
            width: `${size}`,
            height: `${size}`,
            position: 'relative',
            background: `${this.props.color}`,
            margin: `${margin}`
        };
        return (
            <div
                onClick={this.checkFilter}
                style={colorBlockStyle}>
                {  this.state.checked && !this.props.last &&
                <img className="ChooseColorSign" src={require(`../../../../resources/icons/Check.png`)}/>  }
                {  this.props.last &&
                <img className="ChooseColorSign" src={require(`../../../../resources/icons/Add.png`)}/>  }
            </div>
        );
    }
}
