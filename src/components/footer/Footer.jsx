import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>@2023 Vikas Rajput. All Rights Reserved</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Vikas FB" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Vikas Insta" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Vikas Twitter" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Vikas Youtube" />
      </div>
    </footer>
  );
};

export default Footer;
