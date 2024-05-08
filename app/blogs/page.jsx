import React from "react";
import { auth, signOut } from "@/auth";
import Signout from "@/components/auth/Signout";
import Login from "../pages/Login";
import Navbar from "@/components/Navbar";

const page = async () => {
  const session = await auth();
  if (!session) return <Login />;
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default page;
