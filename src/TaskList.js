import React, {Component} from 'react';
import {Button, ListGroup} from 'react-bootstrap';
import TaskService from './TaskService';

class CustomListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.task);
  }

  render() {
    return (
      <li className="list-group-item" onClick={this.handleClick}>
        {this.props.children}
      </li>
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

	async handleItemClicked(task) {
		task.complete = !task.complete;
		await this.taskSvc.setComplete(task.id, task.complete);
	}

  render() {
		const title = this.props.title;
		const showClear = this.props.showClear;

		const items = this.state.tasks.map(t =>
			<CustomListItem task={t} onClick={this.handleItemClicked}>{t.name}</CustomListItem>
		);

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
