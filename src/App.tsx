import React from "react";
import { OutPut } from "./components/OutPut";
import { BodyInput } from "./components/BodyInput";

export const App = () => {
  // genderを選択する余地を与える必要あり
  const basalMetabloism = (weight: number, height: number, age: number) => {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  };

  return (
    <>
      <BodyInput title="身長" />
      <BodyInput title="体重" />
      <BodyInput title="年齢" />
      <OutPut title="基礎代謝" />
      {basalMetabloism(71, 164, 27)} kcal
    </>
  );
};
