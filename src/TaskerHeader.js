import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';

export default class TaskerHeader extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Tasker</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}
