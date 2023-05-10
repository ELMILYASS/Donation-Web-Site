import React, { useContext, useState } from "react";
import Select from "./Select";
import { Context } from "./Donate";
function Books() {
  const ContextValue = useContext(Context);
  const [donations, setdonations] = ContextValue.donations;
  const [Data, setData] = ContextValue.Books;
  const [isupdating, setisupdating] = ContextValue.update;
  const [updateddonation, setupdateddonation] = ContextValue["updatedDonation"];
  console.log(Data);
  function preventDefault(e) {
    e.preventDefault();
    setdonations((prev) => {
      return [
        ...prev,
        {
          mainType: "Books",
          id: donations.length + 1,
          infos: { type: Data.type, age: Data.age, title: Data.title },
        },
      ];
    });
    setData((prev) => {
      return { ...prev, age: "", title: "" };
    });
  }
  function Update(e) {
    e.preventDefault();
    setdonations((prev) => {
      let updatedarray = prev;
      updatedarray[updateddonation - 1] = {
        mainType: "Books",
        id: updateddonation,
        infos: { type: Data.type, age: Data.age, title: Data.title },
      };

      return updatedarray;
    });
    setData((prev) => {
      return { ...prev, age: "", title: "" };
    });
    setisupdating(false);
  }
  console.log(Data.age);
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
      return { ...prev, age: "", title: "" };
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
                "Romantic",
                "Crime",
                "Drama",
                "Children's",
                "Fantasy",
                "Horror",
              ]}
              type={Data.type}
              function={setData}
              name="type"
            />
          </div>
          <div className="input">
            <label htmlFor="age">Reader Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              value={Data.age}
              onChange={handleChange}
            />
          </div>
          <div className="input bookTitle">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={Data.title}
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

export default Books;
