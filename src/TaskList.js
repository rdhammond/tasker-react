import React, {Component} from 'react';
import {Button, ListGroup, Glyphicon} from 'react-bootstrap';
import CustomListItem from './CustomListItem';
import ListItemEditor from './ListItemEditor';
import ConfirmDeleteAllModal from './ConfirmDeleteAllModal';
import TaskService from './TaskService';
import './TaskList.css';

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmModalShowing: false,
	  tasks: [],
	  showListEditor: false
    };
    this.taskSvc = new TaskService(this.props.baseUrl, this.props.type);
    this.handleClearAllClicked = this.handleClearAllClicked.bind(this);
    this.handleItemClicked = this.handleItemClicked.bind(this);
    this.handleDeleteAllConfirmed = this.handleDeleteAllConfirmed.bind(this);
	this.handleListEditConfirmed = this.handleListEditConfirmed.bind(this);
	this.handleAddClicked = this.handleAddClicked.bind(this);
  }

  async componentDidMount() {
    const tasks = await this.taskSvc.get();
    this.setState({tasks});
  }

  handleClearAllClicked() {
    this.setState({confirmModalShowing: true});
  }

  async handleItemClicked(task) {
	task.complete = !task.complete;

  	const tasks = await this.taskSvc.put(task);
	this.setState({tasks});
  }

  async handleDeleteClicked(task) {
	const tasks = await this.taskSvc.del(task);
  	this.setState({tasks});
  }

  async handleDeleteAllConfirmed(ok) {
    this.setState({confirmModalShowing: false});
    if (!ok)
      return Promise.resolve();

    const tasks = await this.taskSvc.delCompleted();
    this.setState({tasks});
  }

  handleAddClicked() {
    this.setState({showListEditor: true});
  }

  async handleListEditConfirmed(name) {
    this.setState({showListEditor: false});
    if (!name)
      return Promise.resolve();

  	const tasks = await this.taskSvc.post({name, complete: false});
	this.setState({tasks});
  }

  render() {
    const { title, showClear } = this.props;
    const { tasks, showListEditor } = this.state;

	const items = this.state.tasks.map(t =>
		<CustomListItem key={t._id} task={t} onClick={this.handleItemClicked} onDeleteClick={this.handleDeleteClicked} />
	);

    return (
      <div className="taskList">
        {showClear &&
        <Button bsStyle="danger" onClick={this.handleClearAllClicked} className="pull-right">Remove Completed</Button>
        }
        <h3>{title}</h3>
        <ListGroup>
          {items}
          <ListItemEditor show={showListEditor} onBlur={this.handleListEditConfirmed} />
        </ListGroup>
        <div>
          <Button bsStyle="primary" onClick={this.handleAddClicked}><Glyphicon glyph="plus" /> Add</Button>
        </div>
        <ConfirmDeleteAllModal onAnswer={this.handleDeleteAllConfirmed} show={this.state.confirmModalShowing} />
      </div>
    );
  }
}
