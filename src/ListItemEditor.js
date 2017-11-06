import React, {Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';
import './ListItemEditor.css';

const ENTER = 13;
const ESC = 27;

export default class ListItemEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleBlur = this.handleBlur.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	handleBlur(e) {
		this.props.onBlur(e.target.value);
	}

	handleKeyUp(e) {
		switch (e.keyCode) {
			case ESC:
				e.target.value = '';
				break;
			case ENTER:
				break;
			default:
				return true;
		}

		this.refs.editBox.blur();
		return false;
	}

	render() {
		const show = this.props.show;

		if (!show)
			return null;

		return (
			<div className="list-group-item">
				<input autoFocus ref="editBox" type="text" className="editBox" onBlur={this.handleBlur} onKeyUp={this.handleKeyUp} />
			</div>
		);
	}
}
