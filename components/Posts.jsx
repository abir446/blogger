import React from "react";
// import { auth, signOut } from "@/auth";
const Posts = async () => {
  //   const session = await auth();
  return (
    <div className="my-4">
      <div className=" max-w-4xl mx-auto border border-slate-300 px-5 py-3">
        <div className="logo text-2xl font-bold font-sans ">Title</div>
        <div className="desc font-mono">
          Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Libero consectetur esse ipsam. Deserunt maxime dignissimos quam totam
          ab, aspernatur molestias!
        </div>
      </div>
    </div>
  );
};

export default Posts;
