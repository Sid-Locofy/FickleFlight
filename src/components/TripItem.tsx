import { FunctionComponent } from "react";
import styles from "./TripItem.module.css";

export type TripItemType = {
  icon?: string;
  text?: string;
};

const TripItem: FunctionComponent<TripItemType> = ({
  icon = "/icon@2x.png",
  text = "Text",
}) => {
  return (
    <div className={styles.tripitem}>
      <img className={styles.icon} alt="" src={icon} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default TripItem;
