import './Signup.css';

export default function SignUpView() {
  return (
    <div>
      <div id="body_stuff">
        <div id="testing">
          <div id="titles">
            <h1 id="icon">
              <i className="bi bi-person-plus" />
            </h1>

            <p id="subheading">Sign Up</p>
          </div>
          <div id="form_contents">
            <form action="" className="signInForm" id="form">
              <input id="elements" placeholder="username" type="text" />
              <br />

              <input id="elements" placeholder="password" type="text" />
              <br />
              <button type="button" id="main__btn">
                Save
              </button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
