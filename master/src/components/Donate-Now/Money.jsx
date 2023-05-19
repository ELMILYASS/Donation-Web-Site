import React, { useContext, useState } from "react";
import { Context } from "./Donate";
function Money() {
  const ContextValue = useContext(Context);
  const [donations, setdonations] = ContextValue.donations;
  const [filled, setFilled] = ContextValue["Filled"];
  const [Data, setData] = ContextValue.Money;
  const [isupdating, setisupdating] = ContextValue.update;
  const [updateddonation, setupdateddonation] = ContextValue["updatedDonation"];
  function Update(e) {
    e.preventDefault();
    setdonations((prev) => {
      let updatedarray = prev;
      updatedarray[updateddonation - 1] = {
        mainType: "Money",
        id: updateddonation,
        infos: { type: Data.type, money: Data.money },
      };
      return updatedarray;
    });
    setData((prev) => {
      return { ...prev, description: "" };
    });
    setisupdating(false);
  }
  function preventDefault(e) {
    e.preventDefault();

    const absentField = Object.values(Data)
      .map((e) => e.trim())
      .includes("");

    if (absentField) {
      setFilled(true);
    } else {
      setFilled(false);
      setdonations((prev) => {
        return [
          ...prev,
          {
            mainType: "Money",
            id: donations.length + 1,
            infos: { type: Data.type, money: Data.money },
          },
        ];
      });
      setData((prev) => {
        return { ...prev, money: "" };
      });
    }
  }
  function handleChange(e) {
    setData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  }

  function Delete(e) {
    e.preventDefault();
    setdonations((prev) => {
      let updatedarray = prev
        .slice(0, updateddonation - 1)
        .concat(prev.slice(updateddonation));
      console.log(updatedarray);
      console.log(prev.slice(0, 2));
      return updatedarray;
    });
    setData((prev) => {
      return { ...prev, money: "" };
    });
    setisupdating(false);
  }
  return (
    <div className="form">
      <form>
        <div className="fieldForm">
          <div className="input money">
            <label htmlFor="type">Money:</label>
            <input
              type="text"
              id="money"
              name="money"
              value={Data.money}
              onChange={handleChange}
            />
          </div>
        </div>
        {isupdating ? (
          <div className="buttons">
            <button onClick={Update}>Update</button>
            <button onClick={Delete} className="delete">
              DELETE
            </button>
          </div>
        ) : (
          <button onClick={preventDefault}>Add</button>
        )}
      </form>
    </div>
  );
}

export default Money;
