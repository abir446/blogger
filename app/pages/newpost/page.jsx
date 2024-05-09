"use client";
import { useState } from "react";
// import { auth } from "@/auth";
import { useRouter } from "next/navigation";
const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const session = await auth();
    // const user = session.user.name;
    console.log(title, body);
    if (!title || !body) {
      alert("Please fill out all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
        }),
      });

      if (res.ok) {
        console.log("Data Posted");
        router.push("/blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <form
        className="w-[80vw] max-w-3xl flex flex-col items-center justify-center  mx-auto border border-slate-300 px-5 py-3 h-[80vh] bg-slate-200 shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl font-bold ">Create New Post</h1>
        <div className="w-full md:w-[80%]">
          <div className="flex flex-col items-start justify-center my-2">
            <label htmlFor="title">Post Title: </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-8 p-2 rounded-md w-full"
              type="text"
              name="title"
              id=""
              placeholder="Nvidia creates HISTORY!"
            />
          </div>
          <div className="flex flex-col items-start justify-center my-2">
            <label htmlFor="body">Post Body: </label>
            <input
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="h-8 p-2 rounded-md w-full"
              type="text"
              name="body"
              id=""
              placeholder="Nvidia creates HISTORY!"
            />
          </div>
        </div>
        <button
          className="border border-slate-700 px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-300"
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
