import Post from "@/models/Post";
import connectToDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    // mongoose.set("strictQuery", false);
    await connectToDB();

    const posts = await Post.find(username && { name: username });
    console.log(posts);
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newPost = new Post(body);
  try {
    // mongoose.set("strictQuery", false);
    await connectToDB();

    await newPost.save();
    return new NextResponse("Post has been created", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


