import React from "react";

type Props = {
  title: string;
};

export const OutPut = (props: Props) => {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  );
};
