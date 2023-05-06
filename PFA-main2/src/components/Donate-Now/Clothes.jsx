import React, { useState, useContext } from "react";
import Select from "./Select";
import { Context } from "./Donate";
function Clothes() {
  const ContextValue = useContext(Context);
  const [donations, setdonations] = ContextValue.donations;
  const [isupdating, setisupdating] = ContextValue.update;
  const [updateddonation, setupdateddonation] = ContextValue["updatedDonation"];
  const [Data, setData] = ContextValue.Clothes;
  function preventDefault(e) {
    e.preventDefault();
    setdonations((prev) => {
      return [
        ...prev,
        {
          mainType: "Clothes",
          id: donations.length + 1,
          infos: {
            type: Data.type,
            gender: Data.gender,
            size: Data.size,
            age: Data.age,
            quantity: Data.quantity,
          },
        },
      ];
    });
    setData((prev) => {
      return { ...prev, age: "", quantity: "", gender: "male" };
    });
  }
  function Update(e) {
    e.preventDefault();
    setdonations((prev) => {
      let updatedarray = prev;
      updatedarray[updateddonation - 1] = {
        mainType: "Clothes",
        id: updateddonation,
        infos: {
          type: Data.type,
          size: Data.size,
          age: Data.age,
          quantity: Data.quantity,
          gender: Data.gender,
        },
      };

      return updatedarray;
    });
    setData((prev) => {
      return {
        ...prev,
        size: "L",
        age: "",
        quantity: "",
        gender: "male",
      };
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
      return {
        ...prev,
        size: "L",
        age: "",
        quantity: "",
        gender: "",
      };
    });
    setisupdating(false);
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
              name="type"
              function={setData}
            />
          </div>
          <div className="input">
            <label htmlFor="size">Size:</label>
            {/* <input
              type="text"
              id="size"
              name="size"
              value={Data.size}
              onChange={handleChange}
            /> */}
            <Select
              values={["L", "M", "XL", "XXL"]}
              type={Data.size}
              function={setData}
              name="size"
            />
          </div>
        </div>
        <div className="fieldForm">
          <div className="input">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={Data.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              value={Data.age}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="fieldForm radio">
          <div>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={Data.gender == "male"}
              onChange={handleChange}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={Data.gender == "female"}
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
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

export default Clothes;
