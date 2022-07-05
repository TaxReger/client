import React, { useState } from 'react';
import { getAccount, signIn, useAuthContext } from '../funcs/auth';
import '../App.css';
import logo from './church_logo.png';
import icon from '../../../assets/icon.svg';

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
      <div id="container">
        <div id="contents">
          <img src={logo} alt="church" id="Image" />
          <img width="200px" alt="icon" src={icon} />

          <p> Tax Registration Program</p>
        </div>
      </div>
      <div id="testing">
        <div id="titles">
          <img src="assets/icons/form.png" id="icon" alt="image_alternative" />
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
          <button type="button" id="forgot">
            Forgot Password?
          </button>
          <br />
          <br />
          <div id="forget_text">Not Registered? Create an Account</div>
        </div>
      </div>
    </div>
  );
}
