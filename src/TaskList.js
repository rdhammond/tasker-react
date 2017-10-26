import React, {Component} from 'react';
import {Well} from 'react-bootstrap';
import TaskService from './TaskService';

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.taskSvc = new TaskService(this.props.baseUrl);
  }

  render() {
    return (
      <div className="taskList">
        <h3>Test</h3>
        <Well>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </Well>
      </div>
    );
  }
}
