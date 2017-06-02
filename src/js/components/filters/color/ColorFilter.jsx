import React from "react";

export default class ColorFilter extends React.Component {

    constructor(props) {
        super(props);
        this.check = this.check.bind(this);
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
                className={`Color__${this.props.color}${checkStyle}`}>

                {  this.state.checked && !this.props.last &&
                <img src={require(`../../../../resources/icons/Check.png`)}/>  }

                {  this.props.last && <img src={require(`../../../../resources/icons/Add.png`)}/>  }
            </div>
        );
    }
}
