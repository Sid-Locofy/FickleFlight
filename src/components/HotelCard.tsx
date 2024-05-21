import { FunctionComponent } from "react";
import styles from "./HotelCard.module.css";

export enum Rating {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5
}

export type HotelCardType = {
  image?: string;
  hotelType?: string;
  hotelName?: string;
  price?: string;
  showVideoIcon?: boolean;
  rating?: Rating;
  reviews?: number;
  callToAction?: React.ReactNode;
  onVideoIconClick?: () => void;
};

const HotelCard: FunctionComponent<HotelCardType> = ({
  image = "/image4@2x.png",
  hotelType = "Hotel Type",
  hotelName = "Hotel Name",
  price = "0",
  showVideoIcon,
  rating = Rating.Five,
  reviews = 0,
  callToAction,
  onVideoIconClick
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
          <img className={styles.videoIcon} alt="" src="/video.svg" onClick={onVideoIconClick}/>
        )}
      </div>
      <div className={styles.rating}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.rating1}>{rating}</div>
        </div>
        <div className={styles.reviews}>{"("}{reviews}{" reviews)"}</div>
      </div>
      {callToAction}
    </div>
  );
};

export default HotelCard;
