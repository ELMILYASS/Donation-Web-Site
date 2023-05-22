import Profile from "./components/Profile/Profile";
import Home from "./components/Login/Home";
import DonateNow from "./components/Donate-Now/DonateNow";
import MyDonationPage from "./components/Pages/MyDonationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import { createContext, useEffect } from "react";
import axios from "./axios/axios";
import RequireAuth from "./Route/RequireAuth";
// const res = axios.get("/donors");
// console.log(res);

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/donation" element={<DonateNow />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/donations" element={<MyDonationPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
