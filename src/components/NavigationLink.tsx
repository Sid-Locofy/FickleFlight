import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./NavigationLink.module.css";

export type NavigationLinkType = {
  text?: string;

  /** Style props */
  textColor?: CSSProperties["color"];
};

const NavigationLink: FunctionComponent<NavigationLinkType> = ({
  text = "text",
  textColor = "#1262AF",
}) => {
  const textStyle: CSSProperties = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div className={styles.navigationlink}>
      <button className={styles.text} style={textStyle}>
        {text}
      </button>
    </div>
  );
};

export default NavigationLink;
