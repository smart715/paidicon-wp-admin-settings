import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import GeneralSetting from './components/pages/GeneralSetting';
import ThemeSetting from './components/pages/ThemeSetting';
import PremiumFeature from './components/pages/PremiumFeature';
import PaymentHistory from './components/pages/paymentHistory';
function App() {
  return (
   <>
    <Routes>
        <Route path="/general-setting" element={<GeneralSetting />} />
        <Route path="/theme" element={<ThemeSetting />} />
        <Route path='/premium' element={<PremiumFeature />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
    </Routes>
   </>
  );
}

export default App;
