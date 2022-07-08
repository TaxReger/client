import { Link } from 'react-router-dom';
import './QuebecForm.css';

export default function QuebecFormView() {
  return (
    <div>
     

  


  <div id="body_stuff_dd">
    
  <h1 id = "file_icon">
  <div className="shadow-lg p-20 mb-10 bg-white rounded" id = "shadow">
    <i className="bi bi-file-plus"></i>
    </div>
   
      </h1>

    <div id="testing_d">
    
      <div id="titles_d">
        <p id="subheading_d">Quebec Registration Form</p>
        
      </div>
    <div id="form_contents">

     <form id = "change">
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Date of Invoice</label>
    <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
       <br></br>
       <div className="row">
  <div className="col">
    <label htmlFor="exampleInputPassword1">Item</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder=""></input>
  </div>
  
       </div>
       

       <div className = "row">
        <div className ="col">
    <label htmlFor="exampleInputPassword1">Cost before Taxes</label>
    <input type="text" className ="form-control" id="exampleInputPassword1" placeholder=""></input>
  </div>
        <div className ="col">
    <label htmlFor="exampleInputPassword1">Cost after Taxes</label>
   
    <input type="text" className ="form-control" id="disabledInput" disabled></input>
  </div>
    
         <br></br>
         <br></br>
       </div>
       <div className = "row">
        <div className ="col">
          <br></br>
    <label htmlFor="exampleInputPassword1">HST(ON)</label>
    <input type="text" className ="form-control" id="exampleInputPassword1"  disabled></input>
          
  </div>
        <div className ="col">
          <br></br>
    <label htmlFor="exampleInputPassword1">PST(ON)</label>
    <input type="text" className="form-control" id="exampleInputPassword1"  disabled></input>
          <br></br>
          
  </div>
       </div>
       
        <div className="form-group">
    <label htmlFor="exampleInputPassword1">GST(ON)</label>
    <input type="text" className="form-control" id="exampleInputPassword1"  disabled></input>
          <br></br>
          
  </div>
       <div className="form-group">
    <label htmlFor="exampleInputPassword1">Beneficiary</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder=""></input>
    </div>
          <div className="form-group">
    <label htmlFor="exampleInputPassword1">Invoice Number</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder=""></input>
             <div className="form-group">
    <label htmlFor="exampleInputPassword1">Cheque Total</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder=""></input>
          
  </div>
       <br></br>

         
    
          
        
       </div>         
             
</form>
<button type="submit" className="btn btn-secondary" id = "save_btn">Save</button>
        


      
    </div>
    </div>
    </div>
</div>


  );
}
