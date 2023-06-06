"use client";

import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { motion } from "framer-motion";

import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => {
        return (
          <div key={item.id} className={styles.item}>
            <motion.div
              initial={{ x: -300 }}
              whileInView={{
                x: 0,
              }}
              className={styles.content}
            >
              <h1 className={styles.title}>{item.title}</h1>
              <p>{item.desc}</p>
              <Button text="See More" url="#" />
            </motion.div>
            <motion.div
              initial={{ x: 300 }}
              whileInView={{
                x: 0,
              }}
              className={styles.imgContainer}
            >
              <Image
                className={styles.img}
                fill={true}
                src={item.image}
                alt="blog"
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
