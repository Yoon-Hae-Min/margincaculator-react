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
import useInput from './Hooks/useInput';
import { loadMonthData } from './slice/storeSlice';

function App() {
  const day = dayjs();
  const [month, setMonth] = useState(day.month() + 1);// 0~11월
  const dispatch = useDispatch();
  const onChangeMonth = (event) => {
    event.preventDefault();
    setMonth(parseInt(event.target.value, 10));
    dispatch(loadMonthData({ year: 2022, month }));// storeId도 전달
    // DB에서 데이터를 불러옴
  };
  useEffect(() => {
    dispatch(loadMonthData({ year: 2022, month }));
  }, []);
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
      <Row>
        <Col md={{ span: 2, offset: 10 }}>
          <Form.Select onChange={onChangeMonth} value={month}>
            <option value={1}>1월</option>
            <option value={2}>2월</option>
            <option value={3}>3월</option>
            <option value={4}>4월</option>
            <option value={5}>5월</option>
            <option value={6}>6월</option>
            <option value={7}>7월</option>
            <option value={8}>8월</option>
            <option value={9}>9월</option>
            <option value={10}>10월</option>
            <option value={11}>11월</option>
            <option value={12}>12월</option>
          </Form.Select>
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
