import Profile from "./components/Profile/Profile";
import Home from "./components/Login/Home";
import DonateNow from "./components/Donate-Now/DonateNow";
import MyDonationPage from "./components/Pages/MyDonationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import { useEffect } from "react";
import axios from "./axios/axios";
// const res = axios.get("/donors");
// console.log(res);
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donation" element={<DonateNow />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/donations" element={<MyDonationPage />} />
      </Routes>
    </Router>
  );
}
export default App;
