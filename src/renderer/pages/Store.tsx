import './Provinces.css';

export default function SignInView() {
  return (
    <div>
      <div id="container">
        <div id="contents">
          <img src="assets\icons\church.png" alt="church" id="Image" />
          <p> Tax Registration Program</p>
        </div>
      </div>
      <div>
        <div id="testing">
          <div>
            <img src="assets\icons\store.jpg" id="icon" alt="store" />
            <p id="header"> Store </p>
          </div>

          <form action="" className="signInForm" id="form">
            <select name="Store_options" id="store_options">
              <option value="volvo">Add new store</option>
              <option value="volvo">Search for existing store </option>
            </select>

            <br />
            <button type="button" id="main__btn">
              Next
            </button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
