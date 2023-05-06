import Profile from "./components/Profile/Profile";
import Home from "./components/Login/Home";
import DonateNow from "./components/Donate-Now/DonateNow";
import MyDonationPage from './components/Pages/MyDonationPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/donation" element={<DonateNow />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/mydonation" element={<MyDonationPage />}/>
      </Routes>
    </Router> 
  );
}
export default App;
