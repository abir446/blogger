import React from "react";
import { auth, signOut } from "@/auth";
import Signout from "@/components/auth/Signout";
import Login from "../pages/Login";
import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";

const page = async () => {
  const session = await auth();
  if (!session) return <Login />;
  return (
    <div>
      <Navbar />

      <Posts />
      <Posts />
    </div>
  );
};

export default page;
