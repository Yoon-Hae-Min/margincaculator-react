import React from 'react';
import { Table } from 'react-bootstrap';

function RevenueCost() {
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
