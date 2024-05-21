import { FunctionComponent } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  text?: string;
};

const Button: FunctionComponent<ButtonType> = ({ text = "text" }) => {
  return (
    <button className={styles.button}>
      <div className={styles.text}>{text}</div>
    </button>
  );
};

export default Button;
