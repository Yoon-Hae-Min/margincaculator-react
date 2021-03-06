import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import RevenueCostModal from './RevenueCostModal';

function RevenueCost({ month }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  const RevenueData = useSelector((state) => state.store.data.Revenue);
  const total = useSelector((state) => state.store.data.RevenueSum);
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
            {total}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default RevenueCost;
