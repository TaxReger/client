import '../Signup.css';

export default function SignUpView() {
  return (  
    <div>
      <div>
        <p id = "header"> Sign up </p>
      </div>

      <form action="" className="signInForm" id ="form">
        <input id="elements" placeholder = "username" type="text" /><br></br>
        

        <input id="elements" placeholder="password" type="text" /><br></br>
         <button type="button" id="main__btn">Next</button><br></br>
      </form>
  
    </div>
  );
}
