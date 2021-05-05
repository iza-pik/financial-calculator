import React from "react";

function InputField (props: any) {
    return (
      <>
        <label htmlFor={props.id}>{props.label} </label>
        <input type={props.type} id={props.id} value={props.savings} onChange={props.onChange} placeholder={props.placeholder}/>
      </>
    );
}

export default InputField;
