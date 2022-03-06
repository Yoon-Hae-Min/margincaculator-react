import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import dayjs from 'dayjs';

function RevenueCostModal({ show, handleClose }) {
  const day = dayjs();
  const today = day.format('YYYY-MM-DD');
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>추가하기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>날짜</Form.Label>
            <Form.Control type="date" defaultValue={today} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>비용</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RevenueCostModal;
