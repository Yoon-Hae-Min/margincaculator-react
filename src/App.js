import { Tab } from 'bootstrap';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import {
  Col, Dropdown, DropdownButton, Form, Row, Tabs,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import AppLayOut from './components/AppLayOut';
import LaborCost from './components/LaborCost';
import MaintenanceCost from './components/MaintenanceCost';
import MaterialCost from './components/MaterialCost';
import ResultCost from './components/ResultCost';
import RevenueCost from './components/RevenueCost';
import { loadData } from './slice/storeSlice';

function App() {
  // 새로운 가게추가 기능 만들기
  const day = dayjs();
  const dispatch = useDispatch();
  const [month, setMonth] = useState(day.format('YYYY-MM'));// 0~11월
  const storeName = useSelector((state) => state.store.storeName);
  const onChangeMonth = (event) => {
    event.preventDefault();
    setMonth(event.target.value, 10);
    dispatch(loadData(month));
  };
  useEffect(() => {
    dispatch(loadData(month));
  }, []);
  return (
    <AppLayOut>
      <Row>
        <Col className="m-auto">
          <h4>{storeName}</h4>
        </Col>
        <Col>
          <Row>
            <Col>
              <h5>오늘까지 매출 </h5>
              {/* design을 바꿔서 총가게의 매출로 변경 */}
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
      <Row>
        <Col md={{ span: 2, offset: 10 }}>
          <Form.Control type="month" onChange={onChangeMonth} value={month} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey="maintenanceCost" className="mb-3">
            <Tab eventKey="maintenanceCost" title="유지비">
              <MaintenanceCost month={month} />
            </Tab>
            <Tab eventKey="laborCost" title="인건비">
              <LaborCost month={month} />
            </Tab>
            <Tab eventKey="materialCost" title="재료비">
              <MaterialCost month={month} />
            </Tab>
            <Tab eventKey="revenueCost" title="매출">
              <RevenueCost month={month} />
            </Tab>
            <Tab eventKey="resultCost" title="총합">
              <ResultCost month={month} />
            </Tab>
          </Tabs>
        </Col>
      </Row>

    </AppLayOut>
  );
}

export default App;
