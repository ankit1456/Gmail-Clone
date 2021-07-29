import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailList from "./Components/EmailList";
import Mail from "./Components/Mail";
import SendMail from "./Components/SendMail";
import { useSelector, useDispatch } from "react-redux";
import { selectSendMessageIsOpen } from "./redux/mailSlice";
import Login from "./Components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { selectUser, logout, login } from "./redux/userSlice";
function App() {
  const sendMessageOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            displayName: authUser.displayName,
            photo: authUser.photoURL,
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className='app'>
      {user ? (
        <Router>
          <Header />

          <div className='app__body'>
            <Sidebar />

            <Switch>
              <Route path='/mail'>
                <Mail />
              </Route>
              <Route exact path='/'>
                <EmailList />
              </Route>
            </Switch>
          </div>

          {sendMessageOpen && <SendMail />}
        </Router>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
