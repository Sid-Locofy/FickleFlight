import { FunctionComponent } from "react";
import styles from "./FlightMainContainer.module.css";

export type FlightMainContainerType = {
  departureCityCode?: string;
  departureCity?: string;
  destinationCityCode?: string;
  destinationCity?: string;
  date?: string;
};

const FlightMainContainer: FunctionComponent<FlightMainContainerType> = ({
  departureCityCode = "SIN",
  departureCity = "Singapore",
  destinationCityCode = "LAX",
  destinationCity = "Los Angeles",
  date = "7 Sep 2021",
}) => {
  return (
    <div className={styles.flightMainContainer}>
      <div className={styles.toAndFrom}>
        <div className={styles.details}>
          <b className={styles.departurecitycode}>{departureCityCode}</b>
          <b className={styles.departurecity}>{departureCity}</b>
        </div>
        <div className={styles.flightIcons}>
          <div className={styles.point} />
          <div className={styles.flightIconsChild} />
          <img
            className={styles.ionairplaneIcon}
            alt=""
            src="/ionairplane.svg"
          />
          <div className={styles.flightIconsChild} />
          <div className={styles.point} />
        </div>
        <div className={styles.details1}>
          <b className={styles.destinationcitycode}>{destinationCityCode}</b>
          <b className={styles.destinationcity}>{destinationCity}</b>
        </div>
      </div>
      <div className={styles.departOnParent}>
        <b className={styles.departurecitycode}>Depart on:</b>
        <b className={styles.departurecitycode}>{date}</b>
      </div>
    </div>
  );
};

export default FlightMainContainer;
