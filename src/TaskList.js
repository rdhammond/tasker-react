import React, {Component} from 'react';
import {Well} from 'react-bootstrap';
import TaskService from './TaskService';

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
    this.taskSvc = new TaskService(this.props.baseUrl);
  }

  async componentDidMount() {
    const resource = this.props.resource;
    await this.taskSvc.getAll(resource);
  }

  render() {
    const title = this.props.title;
    const list = this.state.items.map(x => <li>{x.name}</li>);

    return (
      <div className="taskList">
        <h3>{title}</h3>
        <Well>
          <ul>
            {list}
          </ul>
        </Well>
      </div>
    );
  }
}
