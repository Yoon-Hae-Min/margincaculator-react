import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

function ResultCost() {
  return (
    <>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>총 유지비</th>
                <th>총 인건비</th>
                <th>총 재료비</th>
                <th>이번달 매출</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>30000</td>
                <td>9160</td>
                <td>35</td>
                <td>100000</td>
              </tr>
              <tr className="text-center">
                <td colSpan={4}>
                  순이익
                </td>
                <td>
                  100000
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>월</th>
                <th>금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3월</td>
                <td>9160</td>
              </tr>
              <tr className="text-center">
                <td>
                  연매출
                </td>
                <td>
                  100000
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>월</th>
                <th>금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3월</td>
                <td>9160</td>
              </tr>
              <tr className="text-center">
                <td>
                  연순이익
                </td>
                <td>
                  100000
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>

  );
}

export default ResultCost;
