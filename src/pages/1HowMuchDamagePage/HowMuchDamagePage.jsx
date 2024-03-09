import React, { useState } from 'react';
import { Form, InputNumber, Slider, Space, Checkbox, Button, Col, Row, Statistic } from 'antd';


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

// const onChange = (e) => {
//   console.log(`checked = ${e.target.checked}`);
// };


function damageCalculatorEngine(lethalHits, sustainedHits, devWounds, numberOfAttacksValue, hitRollValue, sTRatioValue, armorSaveValue, weaponDamageValue) {
  let calculatedDamage = 0.00; // Update this part with the correct formula for Lethal Hits

  console.log(`statuses of lethalHits: ${lethalHits}, sustainedHits: ${sustainedHits}, devWounds: ${devWounds}`);
  console.log('print mix condition', (lethalHits & sustainedHits) );

  if (lethalHits & sustainedHits) {
    calculatedDamage = 50;
  } else
      if (lethalHits & devWounds) {
      calculatedDamage = 60;
      } else
          if (sustainedHits & devWounds) {
          calculatedDamage = 70;
          } else
              if (lethalHits) {
              calculatedDamage = 20;
              } else
                  if (sustainedHits) {
                    calculatedDamage = numberOfAttacksValue*(1+1/6) * rollPlus(hitRollValue) * rollPlus(sTRatioValue) * (1 - rollPlus(armorSaveValue)) * weaponDamageValue;
                  } else
                      if (devWounds) {
                      calculatedDamage = 40;
                      } else {
                        calculatedDamage = numberOfAttacksValue * rollPlus(hitRollValue) * rollPlus(sTRatioValue) * (1 - rollPlus(armorSaveValue)) * weaponDamageValue;
                      }
                    return calculatedDamage;
  }





export default function HowMuchDamagePage() {

  const [numberOfAttacksValue, setNumberOfAttacksValue] = useState(1);
  const [hitRollValue, setHitRollValue] = useState(3);
  const [sTRatioValue, setSTRatioValue] = useState(3);
  const [armorSaveValue, setArmorSaveValue] = useState(5);
  const [weaponDamageValue, setWeaponDamageValue] = useState(3);
  // const [slider6Value, setSlider6Value] = useState(1);

  const [damageDealt, setDamageDealt] = useState(0.0);

  const [sustainedHits, setSustainedHits] = useState(false);
  const [lethalHits, setLethalHits] = useState(false);
  const [devWounds, setDevWounds] = useState(false);


  const onFinish = (values) => {
    console.log('Success:', values);
    //! calculation should take place here
    // const calculatedDamage = slider1Value + slider2Value;
    console.log('numberOfAttacksValue', numberOfAttacksValue);
    console.log('hitRollValue', hitRollValue);
    console.log('sTRatioValue', sTRatioValue);
    console.log('armorSaveValue', armorSaveValue);
    console.log('weaponDamageValue', weaponDamageValue);

    console.log('hit roll prob', rollPlus(hitRollValue));
    console.log('ST prob', rollPlus(sTRatioValue));
    console.log('armor save prob', rollPlus(armorSaveValue));

    
    let calculatedDamage = damageCalculatorEngine(lethalHits, sustainedHits, devWounds, numberOfAttacksValue, hitRollValue, sTRatioValue, armorSaveValue, weaponDamageValue); 
    setDamageDealt(calculatedDamage.toFixed(2));

  };

  //! part 2 of this code is: to select 1 or multiple models, and wound characteristics. to see how many killed. 


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (<>
      
  <Row >
    <Col span={30} style={{ margin: '0 0 0 46%'}}>
        <Statistic title="Damage dealt" value={damageDealt} precision={2} suffix=" wounds" style={{ textAlign: 'center', margin: '0% 0 10% 25%', width: '115%' }} />
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
                
                <Space style={{ width: '100%' }} direction="vertical"  >
                {/* <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item> */}

          
            <Checkbox name="Sustained Hits" checked={sustainedHits} onChange={() => setSustainedHits(!sustainedHits)} style={{ width: '150%' }}   >Sustained Hits</Checkbox>
            <Checkbox name="Lethal Hits" checked={lethalHits} onChange={() => setLethalHits(!lethalHits)} style={{ width: '150%' }}   >Lethal Hits</Checkbox>
                <Checkbox name="Devastating Wounds" checked={devWounds} onChange={() => setDevWounds(!devWounds)} style={{ width: '150%'}}   >Devastating Wounds</Checkbox>
                
                <Form.Item label='# attacks'> 
                <AttacksWoundsIntegerStep  value={numberOfAttacksValue} onChange={(value) => setNumberOfAttacksValue(value)} />
                </Form.Item>

                <Form.Item label='Hit roll'> 
                    <DiceIntegerStep value={hitRollValue} onChange={(value) => setHitRollValue(value)} />
                </Form.Item>
          
                <Form.Item label='S-T ratio'> 
                    <DiceIntegerStep value={sTRatioValue} onChange={(value) => setSTRatioValue(value)} />
                </Form.Item>
            
                <Form.Item label='Save'> 
                    <DiceIntegerStep value={armorSaveValue} onChange={(value) => setArmorSaveValue(value)} />
                </Form.Item>
            
                <Form.Item label='Damage'> 
                    <DamageIntegerStep value={weaponDamageValue} onChange={(value) => setWeaponDamageValue(value)} />
                </Form.Item>
            
                {/* <Form.Item label='Wounds'> 
                    <IntegerStep value={slider2Value} onChange={(value) => setSlider2Value(value)} />
                </Form.Item> */}

                <Form.Item> 
                    <Button style={{ margin: '0 0 0 50%' }} type="primary" htmlType="submit"> Calculate </Button>
                </Form.Item>
                  
                </Space>
          </Form>
    </Col>
  </Row>
    
  </>);
}
