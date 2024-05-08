import { signIn } from "@/auth.js";

export function SignIn() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/blogs" });
        }}
      >
        <button
          className="border border-black rounded-md transition-colors duration-200 px-4 py-2 hover:bg-slate-800 hover:text-white"
          type="submit"
        >
          Sign in with GitHub
        </button>
      </form>
    </div>
  );
}
