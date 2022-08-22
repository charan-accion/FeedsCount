import Container from 'react-bootstrap/Container';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ChartData from './LineChart';
import CreateFeed from './CreateFeed';
function Dashboard() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="/ChartData">Incoming Monitoring Feed Count</Navbar.Brand>
        <Nav>

        <Nav.Link href="/CreateFeed"><b>Create Feed</b></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Dashboard;
