import { useRouter } from "next/router";
import PropTypes from "prop-types";
import type { FC, ReactNode } from "react";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/use-auth";

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard: FC<AuthGuardProps> = ({children}: AuthGuardProps) => {
  const auth = useAuth();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (!auth.isAuthenticated) {
      router
        .push({
          pathname: "/login",
          query: { returnUrl: router.asPath },
        })
        .catch(console.error);
    } else {
      setChecked(true);
    }
  }, [router, auth]);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
};
