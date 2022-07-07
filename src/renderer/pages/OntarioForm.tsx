import { Link } from 'react-router-dom';
import './OntarioForm.css';

export default function OntarioFormView() {
  return (
    <div>
     

  


  <div id="body_stuff">

    <div id="testing">
    
      <div id="titles">
        <p id="subheading">Ottawa Registration Form</p>
        
      </div>
    <div id="form_contents">

     <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Date of Invoice</label>
    <br></br>
    <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
       <br></br>
       <div className="row">
  <div className="col">
    <label htmlFor="exampleInputPassword1">Item</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder=""></input>
  </div>
        <div className="col">
    <label htmlFor="exampleInputPassword1">HST Number</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder=""></input>
          <br></br>
  </div>
       </div>
       <div className = "row">
        <div className ="col">
    <label htmlFor="exampleInputPassword1">Cost before Taxes</label>
    <input type="text" className ="form-control" id="exampleInputPassword1" placeholder=""></input>
  </div>
        <div className ="col">
    <label htmlFor="exampleInputPassword1">Cost after Taxes</label>
    <input type="text" className ="form-control" id="exampleInputPassword1" placeholder=""></input>
  </div>
    
         <br></br>
         <br></br>
       </div>
       <div className = "row">
        <div className ="col">
          <br></br>
    <label htmlFor="exampleInputPassword1">HST(ON)</label>
    <input type="text" className ="form-control" id="exampleInputPassword1" placeholder=""></input>
          
  </div>
        <div className ="col">
          <br></br>
    <label htmlFor="exampleInputPassword1">PST(ON)</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder=""></input>
          <br></br>
          
  </div>
       </div>
       
        <div className="form-group">
    <label htmlFor="exampleInputPassword1">GST(ON)</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder=""></input>
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
            
  <button type="submit" className="btn btn-primary">Save</button>
         <br></br>
         
    
          
        
       </div>         
             
</form>
        


      
    </div>
    </div>
    </div>
</div>


  );
}
