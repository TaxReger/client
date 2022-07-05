import '../Provinces.css';

export default function SignInView() {
  return (
    <div>
<nav className="navbar navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Tax Registration Program </a>
     <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Sign out</button>
    
    
  </div>
</nav>

  
  <div id="body_stuff">

    <div id="testing">
    
      <div id="titles">
        
        <h1 id = "icon"><i className="bi bi-geo-alt"></i></h1>
       
     
        <p id="subheading">Provinces</p>
        
      </div>
    <div id="form_contents">

       <form action="" className="signInForm" id ="form">
        <select name="Provinces" id="provinces">
  <option value="volvo">Quebec</option>
          <option value="volvo">Ontario</option>
          
        </select>
        </form>
        

       <br></br>
         <button type="button" id="main__btn">Next</button><br></br><br></br>
        </div>
      
    </div>
    </div>
  </div>
  );
}
