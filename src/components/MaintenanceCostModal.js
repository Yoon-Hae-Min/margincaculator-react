import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import useInput from '../Hooks/useInput';
import { addLabor, addMaintenance } from '../slice/storeSlice';

function MaintenanceCostModal({ show, handleClose }) {
  const [name, onChangeName] = useInput();
  const [cost, onChangeCost] = useInput();
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addMaintenance({ name, cost }));
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Form onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>추가하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>월고정비</Form.Label>
            <Form.Control type="text" value={name} onChange={onChangeName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>비용</Form.Label>
            <Form.Control type="number" value={cost} onChange={onChangeCost} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default MaintenanceCostModal;
