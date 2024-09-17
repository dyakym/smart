import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { Title } from "../Title/Title";
import style from "./header.module.scss";

export const Header = () => {
  return (
    <div className={style.header}>
      <Title></Title>
      <div className={style.header__flex}>
        <Input></Input>
        <Select></Select>
      </div>
    </div>
  );
};
