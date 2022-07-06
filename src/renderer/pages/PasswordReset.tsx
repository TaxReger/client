import { Link } from 'react-router-dom';
import './PasswordReset.css';

export default function PasswordResetView() {
  return (
    <div>
      <div id="body_stuff">
        <div id="testing">
          <div id="titles">
            <h1 id="icon_zz">
              <i className="bi bi-bug" />
            </h1>

            <p id="subheading">Password Reset</p>
          </div>
          <div id="form_contents">
            <form action="" className="signInForm" id="form">
              <input id="elements" placeholder="username" type="text" />
              <br />
              <input id="elements" placeholder="password" type="text" /> <br />
              <input
                id="elements"
                placeholder="re-enter password"
                type="password"
              />{' '}
              <br />
              <button type="button" id="main__btn">
                Save
              </button>
              <br />
              <br />
            </form>
          </div>
          <p>
            <Link to="/"> Sign In Instead</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
