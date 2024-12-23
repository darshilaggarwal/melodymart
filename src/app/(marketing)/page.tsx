import { headers } from "next/headers";
import { auth } from "~/lib/auth";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div>
      <h1>Landing Page</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
