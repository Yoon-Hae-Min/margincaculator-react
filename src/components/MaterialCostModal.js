import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import useInput from '../Hooks/useInput';
import { addMaterialCost } from '../slice/storeSlice';

function MaterialCostMoal({ show, handleClose }) {
  const dispatch = useDispatch();
  const [name, onChangeName] = useInput();
  const [quantity, setQuantiry] = useState();

  const [unitCost, setUnitCost] = useState();
  const [totalCost, setTotalCost] = useState();
  const [caculateOrder, setCaculateOrder] = useState(true);
  // true top-down방식 false down-up방식

  const onChangeQuantity = (event) => {
    const { value } = event.target;
    setQuantiry(value);
    if (caculateOrder) {
      setTotalCost(value * unitCost);
    } else {
      setUnitCost(totalCost / value);
    }
  };

  const onChangeUnitCost = (event) => {
    const { value } = event.target;
    setUnitCost(value);
    setCaculateOrder(true);
    setTotalCost(value * quantity);
  };

  const onChangeTotalCost = (event) => {
    const { value } = event.target;
    setTotalCost(value);
    setCaculateOrder(false);
    setUnitCost(value / quantity);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addMaterialCost({
      name, quantity, unitCost, totalCost,
    }));
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Form onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>추가하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>재료명</Form.Label>
            <Form.Control type="text" value={name} onChange={onChangeName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>개당 비용</Form.Label>
            <Form.Control type="number" value={unitCost} onChange={onChangeUnitCost} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>수량</Form.Label>
            <Form.Control type="number" value={quantity} onChange={onChangeQuantity} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>총 비용</Form.Label>
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

export default MaterialCostMoal;
