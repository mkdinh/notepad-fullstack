import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { NoteForm } from "../../components/Form";

import "./Dashboard.scss";
export class Dashboard extends Component {
  render() {
    return (
      <Grid className="Dashboard">
        <Row className="flex-child">
          <Col md={3} className="form-col">
            <NoteForm />
          </Col>
          <Col md={9} className="display-col">
            <h2>Note Card Display</h2>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Dashboard;
