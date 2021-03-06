import React, { useEffect } from 'react';
import './App.css';
import EmailList from './EmailList';
import Mail from './Mail';
import { useDispatch, useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header';
import Sidebar from './Sidebar';
import SendMail from './SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  return (
    <Router>
      {!user ? (
          <Login />
        ) : (
          <div className="App">
            <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route path="/mail" >
                  <Mail />
                </Route>
                <Route path="/" >
                  <EmailList />
                </Route>
              </Switch>
            </div>

            {sendMessageIsOpen && <SendMail />}
          </div>
        )}

    </Router>
  );
}

export default App;
