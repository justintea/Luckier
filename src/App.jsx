import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/0LandingPage/LandingPage"
import HowMuchDamagePage from "./pages/1HowMuchDamagePage/HowMuchDamagePage";
import AttacksRequiredPage from "./pages/2AttacksRequiredPage/AttacksRequiredPage";

function App() {


  return (
    <>

      <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/damagedealt" element={<HowMuchDamagePage />} /> 
          <Route path="/numberofattacks" element={<AttacksRequiredPage />} /> 

      </Routes>      

    </>
  )
}

export default App;
