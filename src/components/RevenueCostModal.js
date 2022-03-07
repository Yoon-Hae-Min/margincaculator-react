import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import useInput from '../Hooks/useInput';
import { addRevenue } from '../slice/storeSlice';

function RevenueCostModal({ show, handleClose }) {
  const dispatch = useDispatch();
  const [date, onChangedate] = useInput();
  const [totalCost, onChangeTotalCost] = useInput();
  const day = dayjs();
  const today = day.format('YYYY-MM-DD');
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addRevenue({ date, totalCost }));
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Form onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>추가하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>날짜</Form.Label>
            <Form.Control type="date" defaultValue={today} onChange={onChangedate} value={date} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>비용</Form.Label>
            <Form.Control type="number" value={totalCost} onChange={onChangeTotalCost} />
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

export default RevenueCostModal;
