import './Invoicesearch.css';

export default function InvoicesearchView() {
  return (
    <div>
       <div id="body_b">

<div id="testing_b">

  <div id="titles">
    
    <h1 id = "icon_b"><i className="bi bi-search"></i></h1>
   
 
    <p id="subheading_b">Invoice Search </p>
    
  </div>
<div id="form_z">

   <form action="" className="signInForm" id ="form">
   <div className="input-group">
  <input type="search" className="form-control rounded" placeholder="Search Invoice Number" aria-label="Search" aria-describedby="search-addon"  />
  <button type="button" className="btn btn-outline-secondary"><i className="bi bi-search"></i></button>
</div>
    
  </form>
    
    </div>
  
    <div>
        <div id = "lower_text_rn">
    <h4 id = "explain"> This will find the record specefic<br></br> to the invoice number that is inputted <b>above</b></h4>
    </div>
    </div>
   
</div>
</div>
    </div>
  );
}
