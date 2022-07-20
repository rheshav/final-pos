import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import RightContent from './RightContent';
import { Container, Row, Col } from 'react-bootstrap';

function Pos(props) {
  return (
    <Container style={{ marginTop: 32 }} fluid>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <RightContent />
        </Col>
      </Row>
    </Container>
  );
}

export default Pos;
