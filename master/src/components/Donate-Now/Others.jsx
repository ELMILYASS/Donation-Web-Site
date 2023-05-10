import React, { useState, useContext } from "react";
import { Context } from "./Donate";
import Select from "./Select";
function Others() {
  const ContextValue = useContext(Context);

  const [donations, setdonations] = ContextValue.donations;
  const [Data, setData] = ContextValue.Others;
  const [isupdating, setisupdating] = ContextValue.update;
  const [updateddonation, setupdateddonation] = ContextValue["updatedDonation"];
  function preventDefault(e) {
    e.preventDefault();
    setdonations((prev) => {
      return [
        ...prev,
        {
          mainType: "Others",
          id: donations.length + 1,
          infos: { type: Data.type, description: Data.description },
        },
      ];
    });
    setData((prev) => {
      return { ...prev, description: "" };
    });
  }
  function Update(e) {
    e.preventDefault();
    setdonations((prev) => {
      let updatedarray = prev;
      updatedarray[updateddonation - 1] = {
        mainType: "Others",
        id: updateddonation,
        infos: { type: Data.type, description: Data.description },
      };

      return updatedarray;
    });
    setData((prev) => {
      return { ...prev, description: "" };
    });
    setisupdating(false);
  }
  console.log(donations);
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
      return { ...prev, description: "" };
    });
    setisupdating(false);
  }
  function handleChange(e) {
    setData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div className="form">
      <form>
        <div className="fieldForm">
          <div className="input">
            <label htmlFor="type">Type:</label>
            <Select
              values={[
                "T-shirt",
                "Jacket",
                "Gloves",
                "T-shirt",
                "Jacket",
                "Gloves",
              ]}
              type={Data.type}
              function={setData}
              name="type"
            />
          </div>
          <div className="input otherDesc">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={Data.description}
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

export default Others;
