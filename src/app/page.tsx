"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const test = useSession();
  const { data: session } = useSession();
  console.log(session, test);
  // session.statusに、ログインしているかどうかのステータスを持っている

  return (
    <>
      <p>
        hello
        <code>src/app/page.tsx</code>
        <code>{session?.user?.name ?? "guest"}</code>
        <code>{session?.user?.email ?? "guest@test.jp"}</code>
      </p>
      {session ? (
        <button onClick={() => signOut()}>sign out</button>
      ) : (
        <>
          <button onClick={() => signIn("github")}>github sign in</button>
          <button onClick={() => signIn("google")}>google sign in</button>
        </>
      )}
    </>
  );
}
