import React from "react";

function AppName() {
  let foodItems = ["dal", "roti", "chawal", "sabji", "pani"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );

  // return <h1>TODO App</h1>
}

export default AppName;
