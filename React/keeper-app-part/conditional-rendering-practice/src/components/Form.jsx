import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type={props.type} placeholder="Username" />
      <input type={props.type} placeholder="Password" />
      {!props.isResgistered && (
        <input type={props.type} placeholder="Confirm Password" />

      )}
     
      <button type="submit">
        {props.isResgistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
