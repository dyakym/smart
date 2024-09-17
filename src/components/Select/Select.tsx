import style from "./select.module.scss";
import React from 'react';
import { setFilter } from "../../store/userSlice";
import { useDispatch } from "react-redux";

export const Select = () => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <select name="select" className={style.select} onChange={handleChange}>
      <option className={style.option} value="name">
        Name
      </option>
      <option className={style.option} value="username">
        Username
      </option>
      <option className={style.option} value="email">
        Email
      </option>
      <option className={style.option} value="phone">
        Phone
      </option>
    </select>
  )
 }