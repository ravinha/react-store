import React from "react";

export default class Checkbox extends React.Component {

	constructor(props){
		super(props);
		this.onChecked = this.onChecked.bind(this);
		this.onUnchecked = this.onUnchecked.bind(this);
		this.state = {
			checked : false
		}
	}

	onChecked(){
		this.setState({
			checked: true
		});
        //TODO UNDEFINED
        this.props.onChecked()
	}

    onUnchecked(){
        this.setState({
            checked: false
        });
        //TODO UNDEFINED
		this.props.onUnchecked()
    }

	render() {
		return (
			<div className="CheckBox">
                { this.state.checked ?
					<img src={require('../../../resources/icons/checkbox_checked.png')} onClick={this.onUnchecked}/>
					:
					<img src={require('../../../resources/icons/checkbox_unchecked.png')} onClick={this.onChecked}/>
                }
			</div>
		);
	}
}
