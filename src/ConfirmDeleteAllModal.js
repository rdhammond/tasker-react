import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ConfirmDeleteAllModal extends Component {
	constructor(props) {
		super(props);
		this.handleOK = this.handleOK.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}

	handleOK() {
		this.props.onAnswer(true);
	}

	handleCancel() {
		this.props.onAnswer(false);
	}

	render() {
		const show = this.props.show;

		return (
			<Modal show={show}>
				<Modal.Header closeButton onHide={this.handleCancel}>
					<Modal.Title>Delete Completed Tasks</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>You are about to delete <strong>all</strong> long term tasks that have been completed. Are you sure you want to do that?</p>
				</Modal.Body>
				<Modal.Footer>
					<Button bsStyle="danger" onClick={this.handleOK}>Yes, I'm sure</Button>
					<Button onClick={this.handleCancel}>Nevermind</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}
