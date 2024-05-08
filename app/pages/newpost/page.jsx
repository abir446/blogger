import React from "react";

const NewPost = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <form
        className="w-[80vw] max-w-3xl flex flex-col items-center justify-center  mx-auto border border-slate-300 px-5 py-3 h-[80vh] bg-slate-200 shadow-md rounded-lg"
        action=""
      >
        <h1 className="text-center text-3xl font-bold ">Create New Post</h1>
        <div className="w-full md:w-[80%]">
          <div className="flex flex-col items-start justify-center my-2">
            <label htmlFor="title">Post Title: </label>
            <input
              className="h-8 p-2 rounded-md w-full"
              type="text"
              name="title"
              id=""
              placeholder="Nvidia creates HISTORY!"
            />
          </div>
          <div className="flex flex-col items-start justify-center my-2">
            <label htmlFor="desc">Post Description: </label>
            <input
              className="h-8 p-2 rounded-md w-full"
              type="text"
              name="desc"
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
