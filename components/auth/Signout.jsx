import React from "react";
import { auth, signOut } from "@/auth";

const Signout = () => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          className="hover:underline hover:underline-offset-4"
          type="submit"
        >
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default Signout;
