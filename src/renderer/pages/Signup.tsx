import '../Signup.css';

export default function SignUpView() {
  return (  
    <div>

    <div id="container">
      <div id = "contents">
         <img src="assets\icons\church.png" alt="Church Photo" id="Image"></img>
        <p> Tax Registration Program</p>
        
      </div>
    </div>

<div id="testing">

<div>
      <div>
         <img src="assets\icons\signup.png" id="icon" alt="Sign Up Image"></img>
        <p id = "header"> Sign up </p>
      </div>

      <form action="" className="signInForm" id ="form">
        <input id="elements" placeholder = "username" type="text" /><br></br>
        

        <input id="elements" placeholder="password" type="text" /><br></br>
         <button type="button" id="main__btn">Next</button><br></br><br></br>
       
      </form>
  
    </div>
</div>
</div>
  );
}
