import Post from "@/models/Post";
import connectToDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    // mongoose.set("strictQuery", false);
    await connectToDB();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    // mongoose.set("strictQuery", false);
    await connectToDB();
    await Post.findByIdAndDelete(id);
    return new NextResponse("Post has been Deleted Successfully", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
