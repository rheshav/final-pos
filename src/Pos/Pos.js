import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import RightContent from './RightContent';
import { Container, Row, Col } from 'react-bootstrap';
import Profile from './Profile';

function Pos(props) {
  return (
    <Container style={{ marginTop: 32 }} fluid>
      <Row>
        <Col md={2}>
          <Sidebar />
          <Profile />
        </Col>
        <Col md={10}>
          <RightContent />
        </Col>
      </Row>
    </Container>
  );
}

export default Pos;
