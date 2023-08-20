"use client";

import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <p>
        hello
        <code>src/app/page.tsx</code>
        <code>{session?.user?.name ?? "guest"}</code>
        <code>{session?.user?.email ?? "guest@test.jp"}</code>
      </p>
      {!session && <button onClick={() => signIn("github")}>sign in</button>}
    </>
  );
}
