import React from "react";
import "../CSS/login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((AuthUser) => {
        dispatch(login(AuthUser.user));
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg'
          alt='logo'
        />
      </div>

      <Button type='submit' onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
};

export default Login;
