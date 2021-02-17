import React, { useState } from "react";
import { OutPut } from "./components/OutPut";
import { BodyInput } from "./components/BodyInput";
import { useForm } from "react-hook-form";
import { Gender } from "./components/Gender";

export const App = () => {
  const [inputHeight, setInputHeight] = useState<number>(0);
  const [inputWeight, setInputWeight] = useState<number>(0);
  const [inputAge, setInputAge] = useState<number>(0);
  const [gender, setGender] = useState();
  const handleChange = (event: any) => setGender(event.target.value);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  const onChangeHeight = (event: any) => setInputHeight(event.target.value);
  const onChangeWeight = (event: any) => setInputWeight(event.target.value);
  const onChangeAge = (event: any) => setInputAge(event.target.value);

  const basalMetabloism = (
    weight: number,
    height: number,
    age: number,
    gender: any
  ) => {
    if (gender === "female") {
      return 10 * weight + 6.25 * height - 5 * age - 165; //女性
    } else {
      return 10 * weight + 6.25 * height - 5 * age + 5; //男性
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Gender
          name="女性"
          gender={gender}
          value="female"
          ref={register({ required: true })}
          checked={gender === "female"}
          handleChange={handleChange}
        />
        <Gender
          name="男性"
          gender={gender}
          value="male"
          ref={register({ required: true })}
          checked={gender === "male"}
          handleChange={handleChange}
        />
        <BodyInput
          name="身長"
          inputValue={inputHeight}
          onChange={onChangeHeight}
          register={register}
        />
        <BodyInput
          name="体重"
          inputValue={inputWeight}
          onChange={onChangeWeight}
          register={register}
        />
        <BodyInput
          name="年齢"
          inputValue={inputAge}
          onChange={onChangeAge}
          register={register}
        />
        <input type="submit" />
      </form>
      <p>value: {gender}</p>
      <OutPut title="基礎代謝" />
      {basalMetabloism(inputWeight, inputHeight, inputAge, gender)} kcal
    </>
  );
};
