"use client";

import { useSession } from "next-auth/react";
import { notFound, useRouter } from "next/navigation";
import useSWR from "swr";

import styles from "./page.module.css";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const { data, mutate, error, isLoading } = useSWR(
    `http://localhost:3000/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;
    try {
      await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading..."
            : data?.map((post) => {
                return (
                  <div className={styles.post} key={post?._id}>
                    <div className={styles.imgContainer}>
                      <Image
                        fill={true}
                        src={post?.img}
                        alt=""
                        className={styles.img}
                      />
                    </div>
                    <h2 className={styles.postTitle}>{post?.title}</h2>
                    <span
                      className={styles.delete}
                      onClick={() => handleDelete(post?._id)}
                    >
                      X
                    </span>
                  </div>
                );
              })}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textarea}
            cols="30"
            rows="10"
          />
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
