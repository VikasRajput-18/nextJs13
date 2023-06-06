"use client";

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { motion } from "framer-motion";



const Contact = () => {
  return (
    <div className={styles.container}>
      <motion.h1
        initial={{ y: 100 }}
        animate={{ y: [100, -20, 0] }}
        transition={{
          duration: "0.3",
        }}
        className={styles.title}
      >
        Let{"'"}s Keep in Touch
      </motion.h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Enter Name"
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Enter Email"
            className={styles.input}
          />
          <textarea
            className={styles.textArea}
            placeholder="Write a message..."
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
