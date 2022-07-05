import '../Signup.css';

export default function SignUpView() {
  return (  
    <div>
<nav className="navbar navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Tax Registration Program </a>
    
    
  </div>
</nav>

  


  <div id="body_stuff">

    <div id="testing">
    
      <div id="titles">
        
        <h1 id = "icon"><i className="bi bi-person-plus"></i></h1>
       
     
        <p id="subheading">Sign Up</p>
        
      </div>
    <div id="form_contents">

      <form action="" className="signInForm" id ="form">
        <input id="elements" placeholder = "username" type="text" /><br></br>
        

        <input id="elements" placeholder="password" type="text" /><br></br>
         <button type="button" id="main__btn">Save</button><br></br>
      
      </form>
      
    </div>
    </div>
  </div>
  </div>
  );
}
