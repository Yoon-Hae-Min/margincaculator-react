import { Tab } from 'bootstrap';
import React from 'react';
import { Col, Row, Tabs } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AppLayOut from './components/AppLayOut';
import LaborCost from './components/LaborCost';
import MaintenanceCost from './components/MaintenanceCost';
import MaterialCost from './components/MaterialCost';
import ResultCost from './components/ResultCost';
import RevenueCost from './components/RevenueCost';

function App() {
  const data = useSelector((state) => state.store.data);
  const selectedData = data.find((v) => v.month === 12);
  return (
    <AppLayOut>
      <Row>
        <Col className="m-auto">
          <h4>카페 1번가</h4>
        </Col>
        <Col>
          <Row>
            <Col>
              <h5>오늘까지 매출 </h5>
              <span>123원</span>
            </Col>

          </Row>
          <Row>
            <Col>
              <h5>이번달 순이익 </h5>
              <span>456원</span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Tabs defaultActiveKey="home" className="mb-3">
        <Tab eventKey="maintenanceCost" title="유지비">
          <MaintenanceCost MaintenanceData={selectedData.Maintenance} />
        </Tab>
        <Tab eventKey="laborCost" title="인건비">
          <LaborCost LaborData={selectedData.Labor} />
        </Tab>
        <Tab eventKey="materialCost" title="재료비">
          <MaterialCost MaterialData={selectedData.Material} />
        </Tab>
        <Tab eventKey="revenueCost" title="매출">
          <RevenueCost RevenueData={selectedData.Revenue} />
        </Tab>
        <Tab eventKey="resultCost" title="총합">
          <ResultCost ResultData={selectedData.Result} />
        </Tab>
      </Tabs>
    </AppLayOut>
  );
}

export default App;
