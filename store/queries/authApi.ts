import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ForgorPasswordRequest,
  LoggedUserResponse,
  ResetPasswordRequest,
  SignInRequest,
  SignUpRequest,
} from "@/types/queries";

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["AuthenticatedUser"],
  baseQuery: fetchBaseQuery({
    credentials: "include",
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/auth`,
  }),
  endpoints: (builder) => ({
    csrfToken: builder.query<void, void>({
      query: () => ({
        url: "/sanctum/csrf-cookie",
      }),
    }),
    signIn: builder.mutation<void, SignInRequest>({
      query: (body) => ({
        url: "/sign-in",
        method: "POST",
        body,
      }),
    }),
    signUp: builder.mutation<void, SignUpRequest>({
      query: (body) => ({
        url: "/sign-up",
        method: "POST",
        body,
      }),
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({
        url: "/sign-out",
        method: "POST",
      }),
    }),
    forgotPassword: builder.mutation<void, ForgorPasswordRequest>({
      query: (body) => ({
        url: "/forgot-password",
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation<void, ResetPasswordRequest>({
      query: (body) => ({
        url: "/reset-password",
        method: "POST",
        body,
      }),
    }),
    me: builder.query<LoggedUserResponse, void>({
      query: () => ({
        url: "/me",
      }),
      providesTags: ["AuthenticatedUser"],
    }),
    removeAccount: builder.mutation<void, void>({
      query: () => ({
        url: "/remove-account",
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLazyCsrfTokenQuery,
  useSignInMutation,
  useSignUpMutation,
  useSignOutMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useRemoveAccountMutation,
  useMeQuery,
} = authApi;
