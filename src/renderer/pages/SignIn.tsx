import React, { useState } from 'react';
import { getAccount, signIn, useAuthContext } from '../funcs/auth';
import './SignIn.css';

export default function SignInView() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [working, setWorking] = useState(false);
  const { setAccount } = useAuthContext();
  const handleSubmit: React.FormEventHandler = async (e) => {
    setWorking(true);
    try {
      e.preventDefault();
      await signIn(email, password);
      setAccount(getAccount());
    } catch (err) {
      console.log('error', err);
    }

    setWorking(false);
  };
  return (
    <div>
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
                    disabled={working}
                  />
                </form>
                <br />
                <br />
                <div id="lower_form">
                  <button type="button" id="forgot">
                    Forgot Password?
                  </button>
                  <br />
                  <br />
                  <div id="forget_text">Not Registered? Create an Account</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
