import './TableIntro.css';

export default function TableIntroView() {
  return (
    <div>
         <nav className="navbar navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Tax Registration Program </a>
    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Sign out</button>
    
    
    
    
  </div>
</nav>
  <div id="body_stuffing">

    <div id="testing_stuff">
    
      <div id="titles_stuff">
        
        <h1 id = "icon_stuff"><i className="bi bi-table"></i></h1>
       
     
        <p id="subheading_stuff"> </p>
        
      </div>
    <div id="form_contents_stuff">

      
        

         <button type="button" id="main__btns">View Table<i className="bi bi-binoculars" id="bi_icons"></i></button>
        <button type="button" id="main__btns">Export Table<i className="bi bi-download" id = "download_icons"></i></button>
       <button type="button" id="main__btns">Add new Records<i className="bi bi-plus-circle" id = "plus_icons"></i></button>
      
        </div>
      
    </div>
    </div>
  </div>
  );
}
