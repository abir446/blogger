import React from "react";
import { auth, signOut } from "@/auth";
import Signout from "@/components/auth/Signout";
import Login from "../pages/Login";

const page = async () => {
  const session = await auth();
  if (!session) return <Login />;
  return (
    <div>
      <div>
        <h1>Hello, {session.user.name}!</h1>
        <Signout />
      </div>
    </div>
  );
};

export default page;
