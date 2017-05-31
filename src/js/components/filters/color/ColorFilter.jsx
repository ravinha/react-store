import React from "react";

export default class ColorFilter extends React.Component {

    constructor(props) {
        super(props);
        this.check = this.check.bind(this)
        this.state = {
            checked: false
        }
    }

    check() {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        var checkStyle = this.state.checked ? " BlockChecked" : "";
        return (
            <div
                onClick={this.check}
                className={`${this.props.type}__${this.props.color}${checkStyle}`}>
                {  this.state.checked && <img src={require(`../../../../resources/icons/Check.png`)}/>  }
            </div>
        );
    }
}
