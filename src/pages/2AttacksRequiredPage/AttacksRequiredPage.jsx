import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';

export default function AttacksRequiredPage() {

  const hitsRequired = 15.00;


  return (<>
  
  {/* <h1> how much damage dealt</h1> */}
    
  <Row gutter={16}>
  
    <Col span={25}>
      <Statistic title="Attacks required" value={hitsRequired} precision={2} suffix=" attacks" />
      <Button
        style={{
          marginTop: 16,
        }}
        type="primary"
      >
        Calculate
      </Button>
    </Col>
  </Row>

  </>);
}