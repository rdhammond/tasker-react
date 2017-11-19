import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import TaskerHeader from './TaskerHeader';
import TaskList from './TaskList';

class App extends Component {
  render() {
    const baseUrl = this.props.baseUrl;

    return (
      <div className="App">
        <TaskerHeader />
        <div className="container">
          <Row>
            <Col md="4">
              <TaskList resource="daily" baseUrl={baseUrl} title="Daily" />
            </Col>
            <Col md="4">
              <TaskList resource="monthly" baseUrl={baseUrl} title="Monthly" />
            </Col>
            <Col md="4">
              <TaskList resource="longterm" baseUrl={baseUrl} title="Long Term" />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
