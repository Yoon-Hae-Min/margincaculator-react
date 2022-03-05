import React from 'react';
import { Table } from 'react-bootstrap';

function MaterialCost() {
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
