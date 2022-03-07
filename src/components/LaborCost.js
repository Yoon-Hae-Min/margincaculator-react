import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import LaborCostModal from './LaborCostModal';

function LaborCost({ LaborData }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(0);
    LaborData.map((item) => setTotal((pre) => pre + item.totalCost));
  }, [LaborData]);
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
        {LaborData && LaborData.map((item, index) => (
          <tr>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.wage}</td>
            <td>{item.time}</td>
            <td>{item.totalCost}</td>
          </tr>
        ))}
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
            {total}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default LaborCost;
