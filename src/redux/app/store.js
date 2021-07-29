import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../mailSlice";
import userReducuer from "../userSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducuer,
  },
});
