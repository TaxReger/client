import './PasswordReset.css';
import icon from '../../../assets/icons/download.png';

export default function PasswordResetView() {
  return (
    <div>
      <div id="container">
        <div id="contents">
          <img src="assets\icons\church.png" alt="church icon" id="Image" />
          <p> Tax Registration Program</p>
        </div>
      </div>
      <div>
        <div id="testing">
          <div>
            <img src={icon} id="icon" alt="icon" />
            <p id="header"> Password Reset </p>
          </div>

          <form action="" className="signInForm" id="form">
            <input id="elements" placeholder="username" type="text" />
            <br />

            <input id="elements" placeholder="password" type="text" />
            <br />
            <input id="elements" placeholder="confirm password" type="text" />
            <br />
            <button type="button" id="main__btn">
              Save
            </button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
