import React from "react";
import { auth, signOut } from "@/auth";

const page = async () => {
  const session = await auth();
  if (!session) return <h1>Not authorised</h1>;
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>

      <h1>Hello This is where all the blog posts should be</h1>
    </div>
  );
};

export default page;
