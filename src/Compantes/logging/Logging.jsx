import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logging() {

  return (
    <>
      <div>
        <form action="">
          <h2>Registertion form</h2>
          <label htmlFor="fistname">First Name:</label>
          <input className=" d-block" type="text" id="fistname" />
          <label htmlFor="lastName">Last Name:</label>
          <input className="d-block" type="text" id="LastName" />
          <label htmlFor="age">Age:</label>
          <input className="d-block" type="text" id="age" />
          <label htmlFor="email">Email:</label>
          <input className="d-block" type="email" id="email" />
          <label htmlFor="password">Email:</label>
          <input className="d-block" type="password" id="password" />
      <button className="btn btn-color  " type="submit">Register</button>
        </form>
      </div>
    </>
  );
}
