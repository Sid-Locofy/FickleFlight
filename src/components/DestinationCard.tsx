import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DestinationCard.module.css";

export type DestinationCardType = {
  city?: string;
  price?: string;

  /** Style props */
  image?: CSSProperties["backgroundImage"];
};

const DestinationCard: FunctionComponent<DestinationCardType> = ({
  image,
  city = "city",
  price = "0",
}) => {
  const destinationCardStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: image,
    };
  }, [image]);

  return (
    <div className={styles.destinationcard} style={destinationCardStyle}>
      <b className={styles.city}>{city}</b>
      <div className={styles.details}>
        <div className={styles.from}>from</div>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
};

export default DestinationCard;
