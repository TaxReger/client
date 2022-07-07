import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AuthState,
  getAccount,
  signIn,
  useAuthContext,
} from 'renderer/funcs/auth';
import './SignIn.css';

export default function SignInView() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [authState, setAuthState] = useState<AuthState>(AuthState.IDLE);
  const { setAccount } = useAuthContext();
  const handleSubmit: React.FormEventHandler = async (e) => {
    setAuthState(AuthState.LOADING);
    try {
      e.preventDefault();
      await signIn(email, password);
      setAccount(getAccount());
      setAuthState(AuthState.SUCCESS);
    } catch (err) {
      console.log('error', err);
      setAuthState(AuthState.FAILED);
    }
  };
  return (
    <div>
      {authState === AuthState.FAILED && (
        <div className="alert alert-danger" id="alert" role="alert">
          Incorrect Username/Password
        </div>
      )}
      <div>
        <div id="main_body">
          <div id="body_stuff">
            <div id="testing">
              <div id="titles">
                <h1 id="icon">
                  <i className="bi bi-journal-plus" />
                </h1>
                <p id="subheading">Login</p>
              </div>
              <div id="form_contents">
                <form onSubmit={handleSubmit} className="signInForm" id="form">
                  <input
                    id="elements"
                    required
                    placeholder="email"
                    type="text"
                    value={email}
                    onChange={(v) => setEmail(v.target.value)}
                  />
                  <br />

                  <input
                    id="elements"
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(v) => setPassword(v.target.value)}
                  />
                  <br />
                  <input
                    type="submit"
                    id="main__btn"
                    value="Submit"
                    disabled={authState === AuthState.LOADING}
                  />
                </form>
                <br />
                <br />
                <div id="lower_form">
                  <Link id="forgot" to="/resetPassword">
                    Forgot Password?
                  </Link>
                  <br />
                  <br />
                  <Link id="forget_text" to="/signup">
                    Not Registered? Create an Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
