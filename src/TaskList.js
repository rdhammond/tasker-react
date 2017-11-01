import React, {Component} from 'react';
import {Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import TaskService from './TaskService';
import './TaskList.css';

class CustomListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(this.props.taskId);
  }

  render() {
    const task = this.props.task;
    const className = task.complete ? 'text-muted' : '';

    return (
      <ListGroupItem href="#" onClick={this.handleClick} className={className}>
        {task.complete && <s>{task.name}</s>}
        {!task.complete && task.name}
      </ListGroupItem>
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
    //await this.taskSvc.setComplete(task.id, task.complete);
  }

  render() {
		const title = this.props.title;
		const showClear = this.props.showClear;
    const tasks = this.state.tasks;
		const items = [];

		for (const k in tasks) {
      const v = tasks[k];
			items.push(
				<CustomListItem key={k} taskId={k} task={v} onClick={this.handleItemClicked} />
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
