import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';

export default class CustomListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(this.props.task);
  }

  handleDeleteClick(e) {
	e.stopPropagation();
    this.props.onDeleteClick(this.props.task);
  }

  render() {
    const task = this.props.task;
    const className = 'list-group-item ' + (task.complete ? 'strike' : '');

    return (
      <div className={className}>
        <a href="#complete" className="complete" onClick={this.handleClick}>{task.name}</a>
        <a href="#delete" className="delete" onClick={this.handleDeleteClick}><Glyphicon glyph="trash" /></a>
      </div>
    );
  }
}


