import { auth } from "@/auth";
import { SignIn } from "@/components/auth/Signin";
import Signout from "@/components/auth/Signout";
import Login from "./pages/Login";

export default async function Home() {
  const session = await auth();
  if (!session) {
    return (
      <div>
        <Login />
      </div>
    );
  }
  if (session) {
    return (
      <div>
        <h1>Hello, {session.user.name}!</h1>
        <Signout />
      </div>
    );
  }
}
