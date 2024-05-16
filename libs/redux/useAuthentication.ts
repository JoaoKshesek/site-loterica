import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "./useAppDispatch";
import { LoggedUserResponse } from "@/types/queries";
import { clearUser, setUser } from "@/store/reducers/commom/auth";
import { useMeQuery } from "@/store/queries/authApi";

interface Props {
  middleware: "guest" | "auth";
  redirectIfAuthenticated?: string;
}

export function useAuthentication({
  middleware,
  redirectIfAuthenticated,
}: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    data: userData,
    isFetching: isFetchingUser,
    isError,
  } = useMeQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  async function getInitialUserData(userData: LoggedUserResponse) {
    const { ...user } = userData;
    if (user) {
      dispatch(setUser(user));
    } else {
      await signOut();
    }
  }

  async function signOut(addPageParameter = false) {
    dispatch(clearUser());
    router.replace(
      addPageParameter
        ? "/"
        : {
            pathname: "/",
            query: { returnUrl: router.asPath },
          }
    );
  }

  useEffect(() => {
    if (userData) {
      getInitialUserData(userData);
    }
  }, [userData]);

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && userData) {
      router.replace(redirectIfAuthenticated);
    } else if (middleware === "auth" && isError) {
      signOut(true);
    }
  }, [userData, isError, middleware, redirectIfAuthenticated]);

  return { user: userData, isFetchingUser };
}
