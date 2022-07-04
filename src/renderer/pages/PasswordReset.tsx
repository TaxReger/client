import '../PasswordReset.css';

export default function SignUpView() {
  return (  
    <div>
    <div id="container">
    <div id = "contents">
       <img src="assets\icons\church.png" alt="Photo of the Remarkables mountain range in Queenstown, New Zealand." id="Image"></img>
      <p> Tax Registration Program</p>
      
    </div>
  </div>
<div>
<div id = "testing">
    <div>
   <img src="C:\Users\nmarc\Desktop\TaxProgram_Backend\client\assets\icons\download.png" id="icon"></img>
      <p id = "header"> Password Reset </p>
     
    </div>

    <form action="" className="signInForm" id ="form">
      <input id="elements" placeholder = "username" type="text" /><br></br>
      

      <input id="elements" placeholder="password" type="text" />
      <br></br>
       <input id="elements" placeholder="confirm password" type="text" /><br></br>
       <button type="button" id="main__btn">Save</button><br></br><br></br>
       </form>
      </div>
      </div>
    </div>
  );
}
