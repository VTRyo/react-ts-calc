// import React from 'react';

type Props = {
  handleChange: any;
  gender: any;
  ref: any;
  name: any;
  value: string;
  checked: any;
};
export const Gender = (props: Props) => {
  return (
    <div>
      <label>{props.name}</label>
      <input
        name={props.name}
        type="radio"
        value={props.value}
        ref={props.ref}
        checked={props.checked}
        onChange={props.handleChange}
      />
    </div>
  );
};
