import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import MaterialCostMoal from './MaterialCostModal';

function MaterialCost() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>재료명</th>
          <th>개당 비용(원)</th>
          <th>수량(개)</th>
          <th>총 비용(원)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>원두</td>
          <td>5000</td>
          <td>100</td>
          <td>500000</td>
        </tr>
        <tr className="text-center">
          <td colSpan={5}>
            <Button variant="outline-primary" onClick={handleOpen}>추가하기</Button>
            <MaterialCostMoal show={show} handleClose={handleClose} />
          </td>
        </tr>
        <tr className="text-center">
          <td colSpan={4}>
            합계
          </td>
          <td>
            5000
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MaterialCost;
