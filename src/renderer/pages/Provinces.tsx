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
            <img src="assets\icons\map.png" id="icon" alt="map icon" />
            <p id="header"> Province </p>
          </div>

          <form action="" className="signInForm" id="form">
            <select name="Provinces" id="provinces">
              <option value="volvo">Quebec</option>
              <option value="volvo">Ontario</option>
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
