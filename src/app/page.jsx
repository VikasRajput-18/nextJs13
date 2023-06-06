"use client";
import Image from "next/image";
import React from "react";
import Hero from "public/hero.png";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.item}
        initial={{ y: 100 }}
        animate={{ y: [100, -20, 0] }}
        transition={{
          duration: "0.3",
        }}
      >
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </motion.div>
      <div className={styles.item}>
        <Image src={Hero} alt="main page" className={styles.img} />
      </div>
    </div>
  );
};

export default Home;
