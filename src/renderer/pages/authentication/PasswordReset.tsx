import { Link } from 'react-router-dom';
import './PasswordReset.css';

export default function PasswordResetView() {
  return (
    <div>
      
      <div id="body_stuff_ee">
        <div id="testing_ee">
          <div id="titles">
            <h1 id="icon_zz">
              <i className="bi bi-bug" />
            </h1>

            <p id="subheading_ee">Password Reset</p>
          </div>
          <div id="form_contents">
            <form action="" className="signInForm" id="form_ee">
              <input id="elements_ee" placeholder="email" type="text" />
              <br />
              <button type="button" id="main__btn_ee">
                Save
              </button>
              <br />
              <br />
            </form>
          </div>
        
        </div>
      </div>
    </div>
  );
}
