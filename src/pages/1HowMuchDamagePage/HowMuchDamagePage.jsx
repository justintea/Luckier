import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';

export default function HowMuchDamagePage() {

  const damageDealt = 15.00;


  return (<>
  
  {/* <h1> how much damage dealt</h1> */}
    
  <Row gutter={16}>
  
    <Col span={25}>
      <Statistic title="Damage dealt" value={damageDealt} precision={2} suffix=" wounds" />
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

//? save pt
// import React from 'react';
// import { Button, Col, Row, Statistic } from 'antd';

// export default function HowMuchDamagePage() {

//   const damageDealt = 15.00;


//   return (<>
  
//   {/* <h1> how much damage dealt</h1> */}
    
//   <Row gutter={16}>
  
//     <Col span={25}>
//       <Statistic title="Damage dealt" value={damageDealt} precision={2} suffix=" wounds" />
//       <Button
//         style={{
//           marginTop: 16,
//         }}
//         type="primary"
//       >
//         Calculate
//       </Button>
//     </Col>
  
//   </Row>
   
//   </>);
// }