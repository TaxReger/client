import './Signup.css';

export default function SignUpView() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            Tax Registration Program{' '}
          </a>
        </div>
      </nav>
      <div id="body_stuff_z">
        <div id="testing_z">
          <div id="titles">
            <h1 id="icon">
              <i className="bi bi-person-plus" />
            </h1>

            <p id="subheading">Sign Up</p>
          </div>
          <div id="form_contents">
            <form action="" className="signInForm" id="form">
              <input id="elements_z" placeholder="username" type="text" />
              <br />

              <input id="elements_z" placeholder="password" type="password" />
              <br />
              <button type="button" id="main__btn_z">
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
