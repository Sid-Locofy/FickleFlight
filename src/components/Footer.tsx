import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.fickleflightBioParent}>
        <div className={styles.fickleflightBio}>
          <img
            className={styles.logowhiteIcon}
            alt=""
            src="/logowhite@2x.png"
          />
          <div className={styles.fickleFlightIs}>
            Fickle Flight is your one-stop travel portal. We offer hassle free
            flight and hotel bookings. We also have all your flight needs in you
            online shop.
          </div>
          <div className={styles.socialMediaLinksContainer}>
            <div className={styles.socialMediaLink}>
              <img
                className={styles.facebookIcon}
                alt=""
                src="/facebook@2x.png"
              />
            </div>
            <div className={styles.socialMediaLink}>
              <img
                className={styles.facebookIcon}
                alt=""
                src="/instagram@2x.png"
              />
            </div>
            <div className={styles.socialMediaLink}>
              <img
                className={styles.facebookIcon}
                alt=""
                src="/twitter@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.containers}>
          <div className={styles.company}>Company</div>
          <div className={styles.linkContainer}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.news}>News</div>
            <div className={styles.news}>Careers</div>
            <div className={styles.news}>How we work</div>
          </div>
        </div>
        <div className={styles.containers}>
          <div className={styles.support}>Support</div>
          <div className={styles.linkContainer1}>
            <div className={styles.news}>Account</div>
            <div className={styles.news}>Support Center</div>
            <div className={styles.news}>FAQ</div>
            <div className={styles.news}>Accessibility</div>
          </div>
        </div>
        <div className={styles.containers2}>
          <div className={styles.more}>More</div>
          <div className={styles.linkContainer1}>
            <div className={styles.news}>Covid Advisory</div>
            <div className={styles.news}>Airline Fees</div>
            <div className={styles.news}>Tips</div>
            <div className={styles.news}>Quarantine Rules</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
