"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Blog = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3000/api/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch Data");
      }
      const data = await response.json();
      setData(data);
    };
    getData();
  }, [data]);
  return (
    <div className={styles.mainContainer}>
      {data?.map((item) => {
        return (
          <Link
            key={item?._id}
            href={`/blog/${item?._id}`}
            className={styles.container}
          >
            <div
              initial={{
                x: -300,
              }}
              whileInView={{
                x: 0,
              }}
              className={styles.imageContainer}
            >
              <Image
                src={item.img}
                alt=""
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <motion.div
              initial={{
                x: 300,
              }}
              whileInView={{
                x: 0,
              }}
              className={styles.content}
            >
              <h1 className={styles.title}>{item?.title}</h1>
              <p className={styles.desc}>{item?.content}</p>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
