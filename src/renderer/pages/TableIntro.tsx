import './TableIntro.css';

export default function TableIntroView() {
  return (
    <div>
  <div id="body_stuff">

    <div id="testing">
    
      <div id="titles">
        
        <h1 id = "icon"><i className="bi bi-table"></i></h1>
       
     
        <p id="subheading"> </p>
        
      </div>
    <div id="form_contents">

      
        

         <button type="button" id="main__btn">View Table<i className="bi bi-binoculars" id="bi_icon"></i></button>
        <button type="button" id="main__btn">Export Table<i className="bi bi-download" id = "download_icon"></i></button>
       <button type="button" id="main__btn">Add new Records<i className="bi bi-plus-circle" id = "plus_icon"></i></button>
      
        </div>
      
    </div>
    </div>
  </div>
  );
}
