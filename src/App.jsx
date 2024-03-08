import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/0LandingPage/LandingPage"
import HowMuchDamagePage from "./pages/1HowMuchDamagePage/HowMuchDamagePage";
import HitsRequiredPage from "./pages/2HitsRequiredPage/HitsRequiredPage";

function App() {


  return (
    <>

      <Routes>
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/damagedealt" element={<HowMuchDamagePage />} /> 
          <Route path="/numberofhits" element={<HitsRequiredPage />} /> 

      </Routes>      

    </>
  )
}

export default App;
