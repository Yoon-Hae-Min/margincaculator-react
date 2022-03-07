import React, { useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import MaintenanceCostModal from './MaintenanceCostModal';
import MaterialCost from './MaterialCost';

function MaintenanceCost({ MaintenanceData }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    MaintenanceData.map((item) => setTotal((pre) => pre + item.cost));
  }, [MaintenanceData]);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>월고정비</th>
          <th>비용(원)</th>
        </tr>
      </thead>
      <tbody>
        {MaintenanceData && MaintenanceData.map((item, index) => (
          <tr>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.cost}</td>
          </tr>
        ))}
        <tr className="text-center">
          <td colSpan={4}>
            <Button variant="outline-primary" onClick={handleOpen}>추가하기</Button>
            <MaintenanceCostModal show={show} handleClose={handleClose} />
          </td>
        </tr>
        <tr className="text-center">
          <td colSpan={2}>
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

export default MaintenanceCost;
