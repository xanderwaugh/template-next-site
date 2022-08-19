import React from "react";
import styles from "styles/Layout/Footer.module.css";
// * Footer Large with Logo Left Follow Us
const Footer: React.FC = () => {
  return (
    <div className={styles["footer-container"]}>
      <footer>
        <div className={styles.footer}>
          <p>footer</p>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
