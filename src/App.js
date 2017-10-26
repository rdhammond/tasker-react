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
              <TaskList type="daily" baseUrl={baseUrl} />
            </Col>
            <Col md="4">
              <TaskList type="monthly" baseUrl={baseUrl} />
            </Col>
            <Col md="4">
              <TaskList type="longterm" baseUrl={baseUrl} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
