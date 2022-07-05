import '../App.css';


export default function SignInView() {
  return (
    <div id = "main_body">

    <nav className="navbar navbar-light bg-dark" >
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">Tax Registration Program</a>
      
      
      
    </div>
  </nav>
  
    
  
  
    <div id="body_stuff">
  
      <div id="testing">
      
        <div id="titles">
          
          <h1 id = "icon"><i className="bi bi-journal-plus"></i></h1>
         
       
          <p id="subheading">Login</p>
          
        </div>
      <div id="form_contents">
  
        <form action="" className="signInForm" id ="form">
          <input id="elements" placeholder = "username" type="text" /><br></br>
          
  
          <input id="elements" placeholder="password" type="text" /> <br></br>
           <button type="button" id="main__btn">Submit</button><br></br><br></br>
          <button type="button" id="forgot"> Forgot Password? </button><br></br><br></br>
          <div id="forget_text">
            Not Registered? Create an Account
          </div>
        </form>
        
      </div>
      </div>
      </div>
      </div>

  );
}
