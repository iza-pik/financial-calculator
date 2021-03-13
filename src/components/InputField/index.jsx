import React from "react";

function InputField (props) {
    return (
      <>
        <label for={props.id}>{props.label} </label>
        <input id={props.id} value={props.savings} onChange={props.onChange} />
      </>
    );
}

export default InputField;