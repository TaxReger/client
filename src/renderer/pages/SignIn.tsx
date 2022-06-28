import '../App.css';

export default function SignInView() {
  return (
    <div>
      <div>
        <p id = "header"> Welcome </p>
        <p id="subheading">Login</p>
      </div>

      <form action="" className="signInForm" id ="form">
        <input id="elements" placeholder = "username" type="text" /><br></br>
        <input id="elements" placeholder="password" type="text" /> <br></br>
        <button type="button" id="main__btn">Submit</button><br></br>
        <button type="button" id="forgot"> Forgot Password? </button><br></br>
      </form>
      <p id="create">Not Registered? Create an Account</p>
    </div>
  );
}
