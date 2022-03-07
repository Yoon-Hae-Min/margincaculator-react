import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import MaterialCostMoal from './MaterialCostModal';

function MaterialCost({ MaterialData }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(0);
    MaterialData.map((item) => setTotal((pre) => pre + item.totalCost));
  }, [MaterialData]);
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
        {MaterialData && MaterialData.map((item, index) => (
          <tr>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.unitCost}</td>
            <td>{item.quantity}</td>
            <td>{item.totalCost}</td>
          </tr>
        ))}
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
            {total}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MaterialCost;
