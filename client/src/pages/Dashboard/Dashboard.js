import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { NoteForm } from "../../components/Form";
import NoteDisplay from "../../components/NoteDisplay";

import "./Dashboard.scss";

export class Dashboard extends Component {
  render() {
    return (
      <Grid className="Dashboard">
        <Row className="flex-child">
          <Col md={12} className="display-col">
            <div className="form-col">
              <NoteForm />
            </div>
            <NoteDisplay />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Dashboard;
