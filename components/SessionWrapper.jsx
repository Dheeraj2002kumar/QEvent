"use client";

import { SessionProvider } from "next-auth/react";

export default function SessionWrapper({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

// "use client";

// import { SessionProvider } from "next-auth/react";

// export default function SessionWrapper(props) {
//   return <SessionProvider>{props.children}</SessionProvider>;
// }
