import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import useInput from '../Hooks/useInput';
import { addLabor } from '../slice/storeSlice';

function LaborCostModal({ show, handleClose }) {
  const [name, onChangeName] = useInput();
  const [wage, onChangeWage] = useInput();
  const [time, onChangeTime] = useInput();
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addLabor({ name, wage, time }));
  };
  return (

    <Modal show={show} onHide={handleClose} centered>
      <Form onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>추가하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text" value={name} onChange={onChangeName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>시급</Form.Label>
            <Form.Control type="number" value={wage} onChange={onChangeWage} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>근무시간</Form.Label>
            <Form.Control type="number" value={time} onChange={onChangeTime} />
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

export default LaborCostModal;
