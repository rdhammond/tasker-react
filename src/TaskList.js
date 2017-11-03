import React, {Component} from 'react';
import {Row, Col, Button, ListGroup, ListGroupItem, Glyphicon, ButtonGroup} from 'react-bootstrap';
import TaskService from './TaskService';
import './TaskList.css';

class CustomListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(this.props.taskId);
  }

  handleDeleteClick(e) {
	e.stopPropagation();
    this.props.onDeleteClick(this.props.taskId);
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

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {tasks: []};
    this.taskSvc = new TaskService(this.props.baseUrl);
    this.handleClearAllClick = this.handleClearAllClick.bind(this);
    this.handleItemClicked = this.handleItemClicked.bind(this);
  }

  async componentDidMount() {
    const tasks = await this.taskSvc.get(this.props.type);
    this.setState({tasks});
  }

  handleClearAllClick() {
    window.alert('handleClearAllClick()');
  }

  async handleItemClicked(taskId) {
    const task = this.state.tasks[taskId];
    task.complete = !task.complete;

    const stateBucket = {};
    stateBucket[taskId] = task;
    this.setState(stateBucket);
    await this.taskSvc.setComplete(task.id, task.complete);
  }

  handleDeleteClicked(taskId) {
    window.alert('Delete: ' + taskId);
  }

  render() {
    const title = this.props.title;
    const showClear = this.props.showClear;
    const tasks = this.state.tasks;
    const items = [];

    for (const k in tasks) {
      const v = tasks[k];
      items.push(
        <CustomListItem key={k} taskId={k} task={v} onClick={this.handleItemClicked} onDeleteClick={this.handleDeleteClicked} />
      );
    }

    return (
        <div className="taskList">
        {showClear &&
        <Button bsStyle="danger" onClick={this.handleClearAllClick} className="pull-right">Remove Completed</Button>
        }
        <h3>{title}</h3>
        <ListGroup>
        {items}
        </ListGroup>
        </div>
        );
  }
}
