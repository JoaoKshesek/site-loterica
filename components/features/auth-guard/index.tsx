import { ReactNode, ReactElement } from "react";

import { useAuthentication } from "@/libs";

interface Props {
  children: ReactNode;
  fallback: ReactElement | null;
}

export function AuthGuard({ children, fallback }: Props) {
  const { user, isFetchingUser } = useAuthentication({ middleware: "auth" });

  if (isFetchingUser || user === null) {
    return fallback;
  }

  return <>{children}</>;
}
