import { FunctionComponent } from "react";
import styles from "./HotelCard.module.css";

export type HotelCardType = {
  image?: string;
  hotelType?: string;
  hotelName?: string;
  price?: string;
  showVideoIcon?: boolean;
  rating?: string;
  reviews?: string;
};

const HotelCard: FunctionComponent<HotelCardType> = ({
  image = "/image4@2x.png",
  hotelType = "Hotel Type",
  hotelName = "Hotel Name",
  price = "0",
  showVideoIcon = true,
  rating = "0",
  reviews = "0",
}) => {
  return (
    <div className={styles.hotelCard}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.stayDetails}>
        <div className={styles.stayDetailsRows}>
          <div className={styles.hoteltype}>{hotelType}</div>
          <b className={styles.hotelname}>{hotelName}</b>
          <div className={styles.price}>{price}</div>
        </div>
        {showVideoIcon && (
          <img className={styles.videoIcon} alt="" src="/video.svg" />
        )}
      </div>
      <div className={styles.rating}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.rating1}>{rating}</div>
        </div>
        <div className={styles.reviews}>{reviews}</div>
      </div>
      <div className={styles.moreDetailsButton}>
        <div className={styles.button}>More details</div>
      </div>
    </div>
  );
};

export default HotelCard;
