import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import RevenueCostModal from './RevenueCostModal';

function RevenueCost({ RevenueData }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>날짜</th>
          <th>비용(원)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2022-03-24</td>
          <td>1000000</td>
        </tr>
        {RevenueData && RevenueData.map((item, index) => (
          <tr>
            <td>{index}</td>
            <td>{item.date}</td>
            <td>{item.totalCost}</td>
          </tr>
        ))}
        <tr className="text-center">
          <td colSpan={3}>
            <Button variant="outline-primary" onClick={handleOpen}>추가하기</Button>
            <RevenueCostModal show={show} handleClose={handleClose} />
          </td>
        </tr>
        <tr className="text-center">
          <td colSpan={2}>
            합계
          </td>
          <td>
            1000000
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default RevenueCost;
