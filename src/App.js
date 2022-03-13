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
import { loadDataOfMonth } from './slice/storeSlice';

function App() {
  const day = dayjs();
  const dispatch = useDispatch();
  const [date, setDate] = useState(day.format('YYYY-MM'));// 0~11월
  const storeName = useSelector((state) => state.store.storeName);
  const user = useSelector(((state) => state.user));
  const onChangeDate = (event) => {
    event.preventDefault();
    setDate(event.target.value, 10);
    dispatch(loadDataOfMonth(date));
  };
  useEffect(() => {
    dispatch(loadDataOfMonth(date));
  }, []);
  return (
    <AppLayOut>
      <Row>
        <Col>
          <h5>오늘까지 매출 </h5>
          <span>
            {user.toalRevenue}
            {' '}
            원
          </span>

        </Col>
        <Col>
          <h5>이번달 순이익 </h5>
          <span>
            {user.totalProfit}
            {' '}
            원
          </span>
        </Col>
      </Row>
      <Row>
        <Col className="m-auto">
          <h4>{storeName}</h4>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 2, offset: 10 }}>
          <Form.Control type="month" onChange={onChangeDate} value={date} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey="maintenanceCost" className="mb-3">
            <Tab eventKey="maintenanceCost" title="유지비">
              <MaintenanceCost date={date} />
            </Tab>
            <Tab eventKey="laborCost" title="인건비">
              <LaborCost date={date} />
            </Tab>
            <Tab eventKey="materialCost" title="재료비">
              <MaterialCost date={date} />
            </Tab>
            <Tab eventKey="revenueCost" title="매출">
              <RevenueCost date={date} />
            </Tab>
            <Tab eventKey="resultCost" title="총합">
              <ResultCost date={date} />
            </Tab>
          </Tabs>
        </Col>
      </Row>

    </AppLayOut>
  );
}

export default App;
