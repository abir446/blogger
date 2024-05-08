import { SignIn } from "@/components/auth/Signin";
import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <div className="border border-black flex flex-col items-center gap-5 justify-center h-[70vh] w-[90vw] max-w-6xl mx-auto rounded-lg shadow-lg bg-slate-100 hover:shadow-2xl transition-all duration-300">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-8xl font-semibold">Welcome to Blogger.</h1>
          <p className="font-serif">
            A place where you find your surroundings!
          </p>
        </div>
        <SignIn />
      </div>
    </div>
  );
};

export default Login;
