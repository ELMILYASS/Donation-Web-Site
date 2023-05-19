import React, { useContext, useState } from "react";
import { Context } from "./Donate";

function Donation(props) {
  const [data, setdata] = useState(props);
  const ContextValue = useContext(Context);

  const [donations, setdonations] = ContextValue.donations;
  function updateDonation() {
    let mainType = data.mainType;
    const [updateddonation, setupdateddonation] =
      ContextValue["updatedDonation"];
    let [State, UpdatedState] = ContextValue[mainType];

    let [update, setUpdate] = ContextValue["update"];

    setUpdate(true);
    let [chosen, setchosen] = ContextValue["MainType"];
    setupdateddonation(data.id);
    console.log(donations);
    setchosen(donations[data.id - 1].mainType);
    UpdatedState(donations[data.id - 1].infos);
  }

  let info = [];
  for (var key in props.infos) {
    info.push(<p>{props.infos[key]}</p>);
  }
  return (
    <div className="donation" onClick={updateDonation}>
      
        <h3>Donation {data.id}</h3>
        <p>{data.mainType}</p>

        <div className="info">{info.slice(0, 3)}</div>
     
    </div>
  );
}

export default Donation;
