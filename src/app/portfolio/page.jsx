"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <motion.div
        initial={{
          x: -100,
        }}
        animate={{
          x: 0,
        }}
        className={styles.items}
      >
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/application" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Portfolio;
