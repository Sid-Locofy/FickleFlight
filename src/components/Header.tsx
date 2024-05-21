import { FunctionComponent } from "react";
import NavigationLink from "./NavigationLink";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img className={styles.logoblueIcon} alt="" src="/LogoBlue@2x.png" />
        <div className={styles.navigationRight}>
          <div className={styles.navigationMenu}>
            <NavigationLink text="Explore" />
            <NavigationLink text="Search" textColor="#424242" />
            <NavigationLink text="Hotels" textColor="#424242" />
            <NavigationLink text="Offers" textColor="#424242" />
          </div>
          <div className={styles.accountSection}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src="/notification.svg"
            />
            <img className={styles.icon} alt="" src="/notification1.svg" />
            <img
              className={styles.avatarIcon}
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
