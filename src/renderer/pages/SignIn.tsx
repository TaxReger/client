import '../App.css';

export default function SignInView() {
  return (
    <div>
    <div id="container">
      <div id = "contents">
         <img src="C:\Users\nmarc\Desktop\TaxProgram_Backend\client\assets\icons\church.png" alt="Photo of the Remarkables mountain range in Queenstown, New Zealand." id="Image"></img>
        <p> Tax Registration Program</p>
      
      </div>
    </div>
    <div id="testing">
    
      <div id="titles">
        <img src="C:\Users\nmarc\Desktop\TaxProgram_Backend\client\assets\icons\form.png" id="icon"></img>
     
        <p id="subheading">Login</p>
      </div>
    <div id="form_contents">

      <form action="" className="signInForm" id ="form">
        <input id="elements" placeholder = "username" type="text" /><br></br>
        

        <input id="elements" placeholder="password" type="text" /><br></br>
         <button type="button" id="main__btn">Submit</button><br></br><br></br>
        <button type="button" id="forgot"> Forgot Password? </button><br></br><br></br>
        <div id="forget_text">
          Not Registered? Create an Account
        </div>
      </form>
      
    </div>
    </div>
    </div>
  );
}
