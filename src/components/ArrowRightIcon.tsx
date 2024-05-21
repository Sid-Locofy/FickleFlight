import { FunctionComponent } from "react";
import styles from "./ArrowRightIcon.module.css";

export type ArrowRightIconType = {
  icon?: string;
};

const ArrowRightIcon: FunctionComponent<ArrowRightIconType> = ({
  icon = "/arrowright.svg",
}) => {
  return <img className={styles.arrowRightIcon} alt="" src={icon} />;
};

export default ArrowRightIcon;
