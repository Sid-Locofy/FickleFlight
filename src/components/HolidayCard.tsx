import { FunctionComponent } from "react";
import styles from "./HolidayCard.module.css";

export type HolidayCardType = {
  image?: string;
  duration?: string;
  price?: string;
};

const HolidayCard: FunctionComponent<HolidayCardType> = ({
  image = "/image@2x.png",
  duration = "4D3N",
  price = "0",
}) => {
  return (
    <button className={styles.holidaycard}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.holidayDetails}>
        <div className={styles.container}>
          <div className={styles.city}>Bali</div>
          <div className={styles.id}>{duration}</div>
        </div>
        <div className={styles.price}>{price}</div>
      </div>
    </button>
  );
};

export default HolidayCard;