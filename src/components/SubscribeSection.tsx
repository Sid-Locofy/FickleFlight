import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Button from "./Button";
import styles from "./SubscribeSection.module.css";

const SubscribeSection: FunctionComponent = () => {
  return (
    <div className={styles.subscribeSection}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <b className={styles.formTitleSubtext}>subscribe to our newsletter</b>
          <b className={styles.formTitle}>Get weekly updates</b>
        </div>
        <form className={styles.form}>
          <div className={styles.fillInYour}>
            Fill in your details to join the party!
          </div>
          <div className={styles.formFields}>
            <TextField
              className={styles.nameInput}
              color="primary"
              label="Your name"
              variant="outlined"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
            <TextField
              className={styles.nameInput}
              color="primary"
              label="Email address"
              variant="outlined"
              type="email"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
          </div>
          <Button text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
