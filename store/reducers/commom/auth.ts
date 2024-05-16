import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserProps {
  name: string;
  email: string;
}

interface AuthStateProps {
  user: UserProps | null;
}

const initialState: AuthStateProps = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthStateProps["user"]>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
