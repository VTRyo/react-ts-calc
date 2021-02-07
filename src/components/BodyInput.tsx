import React from "react";
import TextField from "@material-ui/core/TextField";

const style = {
  // backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

type Props = {
  title: string;
  value: number;
};
export const BodyInput = (props: Props) => {
  return (
    <div style={style}>
      {props.title}
      <TextField title={props.title} />
      <button>追加</button>
    </div>
  );
};
