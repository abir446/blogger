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
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
