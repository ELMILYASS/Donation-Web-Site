import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Image from "./Image";
import Donate from "./Donate";
import Navbar from "../HomeComponents/Navbar";

function DonateNow() {
  return (
    <div className="DonateNow">
      <Navbar/>
      <Header text="Be The Reason Someone Smiles Today"/>
      <div className="section">
        <Image />
        <Donate />
      </div>
      <Footer />
    </div>
  );
}

export default DonateNow;
