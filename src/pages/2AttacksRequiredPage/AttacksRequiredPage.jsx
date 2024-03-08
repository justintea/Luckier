import React, { useState } from 'react';
import { Button, Col, Row, Statistic } from 'antd';
import { Form, InputNumber, Slider, Space  } from 'antd';

const AttacksWoundsIntegerStep = ({ onChange, value }) => {
  const onSliderChange = (sliderValue) => {
    onChange(sliderValue);
  };

  const onInputChange = (inputValue) => {
    onChange(inputValue);
};
  
return (
  <Row>
    <Col span={20}>
      <Slider
        min={1}
        max={30}
        onChange={onSliderChange}
        value={typeof value === 'number' ? value : 0}
      />
    </Col>

    <Col span={4}>
      <InputNumber
        min={1}
        max={30}
        style={{ margin: '0 16px' }}
        value={value}
        onChange={onInputChange}
      />
    </Col>
  </Row>
);
}

const DiceIntegerStep = ({ onChange, value }) => {
  const onSliderChange = (sliderValue) => {
    onChange(sliderValue);
  };

  const onInputChange = (inputValue) => {
    onChange(inputValue);
};
  
return (
  <Row>
    <Col span={20}>
      <Slider
        min={1}
        max={6}
        onChange={onSliderChange}
        value={typeof value === 'number' ? value : 0}
      />
    </Col>

    <Col span={4}>
      <InputNumber
        min={1}
        max={6}
        style={{ margin: '0 16px' }}
        value={value}
        onChange={onInputChange}
      />
    </Col>
  </Row>
);
}

const DamageIntegerStep = ({ onChange, value }) => {
  const onSliderChange = (sliderValue) => {
    onChange(sliderValue);
  };

  const onInputChange = (inputValue) => {
    onChange(inputValue);
};
  
return (
  <Row>
    <Col span={20}>
      <Slider
        min={1}
        max={12}
        onChange={onSliderChange}
        value={typeof value === 'number' ? value : 0}
      />
    </Col>

    <Col span={4}>
      <InputNumber
        min={1}
        max={12}
        style={{ margin: '0 16px' }}
        value={value}
        onChange={onInputChange}
      />
    </Col>
  </Row>
);
}

function rollPlus(diceRollRequired) {
  if (diceRollRequired === 1) { return (6 / 6); } else
    if (diceRollRequired === 2) { return (5 / 6); } else
      if (diceRollRequired === 3) { return (4 / 6); } else
        if (diceRollRequired === 4) { return (3 / 6); } else
          if (diceRollRequired === 5) { return (2 / 6); } else
            if (diceRollRequired === 6) { return (1/ 6); } 
}


export default function AttacksRequiredPage() {

  // const hitsRequired = 15.00;
  const [enemyWoundsValue, setEnemyWoundsValue] = useState(12);
  const [weaponDamageValue, setWeaponDamageValue] = useState(3);
  const [armorSaveValue, setArmorSaveValue] = useState(5);
  const [sTRatioValue, setSTRatioValue] = useState(3);
  const [hitRollValue, setHitRollValue] = useState(3);
  const [attacksPerModelValue, setAttacksPerModelValue] = useState(3);

  const [attacksRequiredValue, setAttacksRequiredValue] = useState(0);
  const [modelsRequiredValue, setModelsRequiredValue] = useState(0);


  const onFinish = (values) => {
    console.log('Success:', values);
    //! calculation should take place here
    // const calculatedDamage = slider1Value + slider2Value;
    console.log('enemyWoundsValue', enemyWoundsValue);
    console.log('weaponDamageValue', weaponDamageValue);
    console.log('armorSaveValue', armorSaveValue);
    console.log('sTRatioValue', sTRatioValue);
    console.log('hitRollValue', hitRollValue);

    console.log('armor save prob', rollPlus(armorSaveValue));
    console.log('ST prob', rollPlus(sTRatioValue));
    console.log('hit roll prob', rollPlus(hitRollValue));

    // let calculatedNumberOfAttacks = enemyWoundsValue / weaponDamageValue * (1+rollPlus(armorSaveValue)) * (1+rollPlus(sTRatioValue)) * (1+rollPlus(hitRollValue));

    let calculatedNumberOfAttacks = enemyWoundsValue / weaponDamageValue / (1-rollPlus(armorSaveValue)) / rollPlus(sTRatioValue) / rollPlus(hitRollValue);


    let calculatedModelsRequired = calculatedNumberOfAttacks / attacksPerModelValue;
    setAttacksRequiredValue(calculatedNumberOfAttacks.toFixed(2));
    setModelsRequiredValue(calculatedModelsRequired.toFixed(2));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  return (<>
    
  <Row >
    <Col span={30} style={{ margin: '0 0 0 35%'}}>
        <Statistic title="Attacks required" value={attacksRequiredValue} precision={0} suffix=" attacks" style={{ textAlign: 'center', margin: '0 0 0% 20%', width: '115%'}} />
        <p  style={{ textAlign: 'center', fontSize: 'smaller', margin: '0 0 10% 20%' }}>
        {modelsRequiredValue} models required
        </p>        
                <Form
                name="basic"
                labelCol={{ span: 8, }}
                wrapperCol={{ span: 16, }}
                // style={{ maxWidth: 600, }}
                style={{ maxWidth: 600, textAlign: 'left' }}
                initialValues={{ remember: true, }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                
                <Space style={{ width: '100%', }} direction="vertical"  >
            

                <Form.Item label='# wounds'> 
                <AttacksWoundsIntegerStep  value={enemyWoundsValue} onChange={(value) => setEnemyWoundsValue(value)} />
                </Form.Item>

                <Form.Item label='Wpn damage'> 
                    <DamageIntegerStep value={weaponDamageValue} onChange={(value) => setWeaponDamageValue(value)} />
                </Form.Item>
          
                <Form.Item label='Save'> 
                    <DiceIntegerStep value={armorSaveValue} onChange={(value) => setArmorSaveValue(value)} />
                </Form.Item>
            
                <Form.Item label='S-T ratio'> 
                    <DiceIntegerStep value={sTRatioValue} onChange={(value) => setSTRatioValue(value)} />
                </Form.Item>
            
                <Form.Item label='Hit roll'> 
                    <DiceIntegerStep value={hitRollValue} onChange={(value) => setHitRollValue(value)} />
                </Form.Item>

                <Form.Item label='Atks/model'> 
                <AttacksWoundsIntegerStep  value={attacksPerModelValue} onChange={(value) => setAttacksPerModelValue(value)} />
                </Form.Item>

                <Form.Item> 
                    <Button style={{ margin: '0 0 0 75%' }} type="primary" htmlType="submit"> Calculate </Button>
               </Form.Item>
            
          
                </Space>
          </Form>
    </Col>
  </Row>

  </>);
}