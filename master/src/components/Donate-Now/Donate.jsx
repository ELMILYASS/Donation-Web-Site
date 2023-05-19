import React, { useState, createContext, useContext } from "react";

import { FaTshirt, FaMoneyBillWave, FaLaptop } from "react-icons/fa";
import { BsBookFill } from "react-icons/bs";
import { MdOutlineDevicesOther } from "react-icons/md";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import Clothes from "./Clothes";
import Money from "./Money";
import Books from "./Books";
import Machines from "./Machines";
import Others from "./Others";
import Donation from "./Donation";
export const Context = createContext();

function Donate() {
  let [isHide, setisHide] = useState(true);
  let [chosen, setChosen] = useState("Clothes");
  function displayChoices() {
    setisHide((prev) => !prev);
  }
  function addDonation(e) {
    let id = e.target.parentNode.id;
    setChosen(id);
    displayChoices();
  }

  let [Donations, setDonations] = useState([]);
  let Donations_array = Donations.map((e) => (
    <Donation id={e.id} mainType={e.mainType} infos={e.infos} />
  ));

  let [DataMachines, setDataMachines] = useState({
    type: "T-shirt",
    brand: "",
    description: "",
  });
  let [DataBooks, setDataBooks] = useState({
    type: "Fantasy",
    age: "",
    title: "",
  });
  let [DataClothes, setDataClothes] = useState({
    type: "T-shirt",
    size: "XL",
    age: "",
    quantity: "",
    gender: "male",
  });
  let [DataOthers, setDataOthers] = useState({
    type: "T-shirt",

    description: "",
  });
  let [DataMoney, setDataMoney] = useState({
    money: "",
  });
  let [isupdating, setisupdating] = useState(false);
  let [updateddonation, setupdateddonation] = useState(0);

  let [filled, setFilled] = useState(false);
  return (
    <div className="Donate field ">
      {filled && <span className="notFilled">All Fields Are Required</span>}
      <button className="select-item" onClick={displayChoices}>
        <span>{chosen}</span>

        {isHide ? (
          <BiDownArrow className="icon show" />
        ) : (
          <BiUpArrow className="icon hide" />
        )}
      </button>
      <div
        className="select"
        style={{
          display: isHide ? "none" : "block",
        }}
      >
        <div id="Clothes">
          <FaTshirt className="icon" />
          <span onClick={addDonation}>Clothes</span>
        </div>
        <span className="line"></span>
        <div id="Money">
          <FaMoneyBillWave className="icon" />
          <span onClick={addDonation}>Money</span>
        </div>
        <div id="Books">
          <BsBookFill className="icon" />
          <span onClick={addDonation}> Books</span>
        </div>
        <div id="Machines">
          <FaLaptop className="icon" />
          <span onClick={addDonation}> Machines</span>
        </div>
        <div id="Others">
          <MdOutlineDevicesOther className="icon" />
          <span onClick={addDonation}> Others</span>
        </div>
      </div>
      <Context.Provider
        value={{
          updatedDonation: [updateddonation, setupdateddonation],
          update: [isupdating, setisupdating],
          MainType: [chosen, setChosen],
          donations: [Donations, setDonations],
          Machines: [DataMachines, setDataMachines],
          Books: [DataBooks, setDataBooks],
          Clothes: [DataClothes, setDataClothes],
          Others: [DataOthers, setDataOthers],
          Money: [DataMoney, setDataMoney],
          Filled: [filled, setFilled],
        }}
      >
        <div className="choose">
          {chosen == "Clothes" ? (
            <Clothes />
          ) : chosen == "Books" ? (
            <Books />
          ) : chosen == "Machines" ? (
            <Machines />
          ) : chosen == "Money" ? (
            <Money />
          ) : chosen == "Others" ? (
            <Others />
          ) : (
            ""
          )}
          <div className="submitDonations">
            <div className="donations">{Donations_array}</div>
            <button className="submitAll">Submit All</button>
          </div>
        </div>
      </Context.Provider>
    </div>
  );
}

export default Donate;
