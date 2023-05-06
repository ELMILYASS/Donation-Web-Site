import React from "react";

function Item(props) {
  return (
    <>
      <div id={props.name}>
        <span onClick={props.addDonation}>{props.name}</span>
      </div>

    </>
  );
}

export default Item;
