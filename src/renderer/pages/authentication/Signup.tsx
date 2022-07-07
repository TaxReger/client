import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AuthState,
  useAuthContext,
  getAccount,
  signUp,
} from 'renderer/funcs/auth';
import './Signup.css';

export default function SignUpView() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [authState, setAuthState] = useState<AuthState>(AuthState.IDLE);
  const { setAccount } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler = async (e) => {
    setAuthState(AuthState.LOADING);
    try {
      e.preventDefault();
      await signUp(email, password);
      setAccount(getAccount());
      setAuthState(AuthState.SUCCESS);
      navigate('/');
    } catch (err) {
      console.log('error', err);
      setAuthState(AuthState.FAILED);
    }
  };
  return (
    <div>
      <div id="body_stuff_z">
        <div id="testing_z">
          <div id="titles">
            <h1 id="icon">
              <i className="bi bi-person-plus" />
            </h1>

            <p id="subheading">Sign Up</p>
          </div>
          <div id="form_contents">
            <form onSubmit={handleSubmit} className="signInForm" id="form">
              <input
                id="elements_z"
                placeholder="email"
                type="text"
                value={email}
                onChange={(v) => setEmail(v.target.value)}
              />
              <br />

              <input
                id="elements_z"
                placeholder="password"
                type="password"
                value={password}
                onChange={(v) => setPassword(v.target.value)}
              />
              <br />
              <input
                type="submit"
                id="main__btn_z"
                value="Sign Up"
                disabled={authState === AuthState.LOADING}
              />

              <br />
            </form>

            <p>
              Already have an account? <Link to="/"> Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
