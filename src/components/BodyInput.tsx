import React from "react";

const style = {
  // backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

type Props = {
  onChange: any;
  inputValue: any;
  register: any;
  name: any;
};
export const BodyInput = (props: Props) => {
  return (
    <div style={style}>
      <label>{props.name}: </label>
      <input
        type="number"
        placeholder={props.name}
        onChange={props.onChange}
        value={props.inputValue}
        name={props.name}
        ref={props.register}
      />
    </div>
  );
};
