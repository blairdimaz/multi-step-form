import React from "react";





function Finalstep(props) {
  return (
    <div>
  <p>Name: {props.state.name} </p>
  <p>Surname: {props.state.surname} </p>
  <p>Email: {props.state.email} </p>
  <p>Phone: {props.state.phone} </p>
  <button onClick={props.prev}>Submit</button>

    </div>
  );
}

export default Finalstep;