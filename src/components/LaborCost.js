import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import LaborCostModal from './LaborCostModal';

function LaborCost() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>이름</th>
          <th>시급(원)</th>
          <th>근무시간</th>
          <th>급여(원)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>홍길동</td>
          <td>9160</td>
          <td>35</td>
          <td>100000</td>
        </tr>
        <tr className="text-center">
          <td colSpan={5}>
            <Button variant="outline-primary" onClick={handleOpen}>추가하기</Button>
            <LaborCostModal show={show} handleClose={handleClose} />
          </td>
        </tr>
        <tr className="text-center">
          <td colSpan={4}>
            합계
          </td>
          <td>
            100000 원
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default LaborCost;
