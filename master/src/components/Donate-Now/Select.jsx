import React, { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import Item from "./Item";
function Select(props) {
  let items_array = props.values;
  let [isHide, setisHide] = useState(true);

  function displayChoices(e) {
    e.preventDefault();
    setisHide((prev) => !prev);
  }

  function addDonation(e) {
    let id = e.target.parentNode.id;

    props.function((prev) => {
      return {
        ...prev,
        [props.name]: id,
      };
    });
    setisHide((prev) => !prev);
  }

  let items = items_array.map((e) => {
    return <Item name={e} addDonation={addDonation} />;
  });

  return (
    <div className="select-type">
      <form>
        <button className="select-type" onClick={displayChoices}>
          <span>{props.type}</span>

          {isHide ? (
            <BiDownArrow className="icon show" />
          ) : (
            <BiUpArrow className="icon hide" />
          )}
        </button>
        <div
          className="select type"
          style={{
            display: isHide ? "none" : "block",
          }}
        >
          {items}
        </div>
      </form>
    </div>
  );
}

export default Select;
