import React, {Component} from 'react';

const ENTER = 13;
const ESC = 27;

export default class ListItemEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleBlur() {
		this.props.onBlur(this.state.value);
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	handleKeyUp(e) {
		switch (e.keyCode) {
			case ENTER:
				break;
			case ESC:
				this.setState({value: ''});
				break;
			default:
				return true;
		}

		this.listItemEditor.blur();
		return false;
	}

	render() {
		if (!this.props.show)
			return null;

		return (
			<input autofocus type="text" className="invisibox" onBlur={this.handleBlur} onChange={this.handleChange} onKeyUp={this.handleKeyUp} value={this.state.value} />
		);
	}
}
