import { auth } from "@/auth";
import { SignIn } from "@/components/auth/Signin";
import Signout from "@/components/auth/Signout";

export default async function Home() {
  const session = await auth();
  if (!session) {
    return (
      <div>
        <SignIn />
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
