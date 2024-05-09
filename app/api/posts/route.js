import connectDB from "@/libs/db";
import Post from "@/models/posts";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, body } = await req.json();

  await connectDB();
  await Post.create({ title, body });
  return NextResponse.json({ message: "Post Uploaded" }, { status: 201 });
}

export async function GET(req) {
  await connectDB();
  const posts = await Post.find();
  return NextResponse.json(posts, { status: 200 });
}
