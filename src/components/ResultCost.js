import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ResultCost() {
  // useEffect로 랜더링 될때마다 API호출해서 연매출 연순이익 받아오기
  // store에서 각월의 매출,순이익 arr를 받아와서 table에 띄우기
  const LaborSum = useSelector((state) => state.store.data.LaborSum);
  const MaintenanceSum = useSelector((state) => state.store.data.MaintenanceSum);
  const MaterialSum = useSelector((state) => state.store.data.MaterialSum);
  const RevenueSum = useSelector((state) => state.store.data.RevenueSum);
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
                <td>{MaintenanceSum}</td>
                <td>{LaborSum}</td>
                <td>{MaterialSum}</td>
                <td>{RevenueSum}</td>
              </tr>
              <tr className="text-center">
                <td colSpan={4}>
                  순이익
                </td>
                <td>
                  {RevenueSum - (LaborSum + MaintenanceSum + MaterialSum)}
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
