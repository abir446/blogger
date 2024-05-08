import React from "react";
import { auth, signOut } from "@/auth";
import Signout from "@/components/auth/Signout";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="flex items-center justify-around h-24 border">
      <h1 className="md:text-3xl">
        Hello, <span className=" font-bold">{session.user.name}!</span>
      </h1>
      <div className="flex gap-5 font-mono md:text-lg">
        <span className="hover:underline hover:underline-offset-4 ">
          New Post
        </span>
        <Signout />
      </div>
    </nav>
  );
};

export default Navbar;
