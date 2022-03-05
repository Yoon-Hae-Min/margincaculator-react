import React from 'react';
import { Table } from 'react-bootstrap';

function MaintenanceCost() {
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
        <tr>
          <td>1</td>
          <td>임대료</td>
          <td>5000</td>
        </tr>
        <tr className="text-center">
          <td colSpan={2}>
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

export default MaintenanceCost;
