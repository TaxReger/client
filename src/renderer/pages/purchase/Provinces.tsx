import './Provinces.css';

export default function ProvinceView() {
  return (
    <div>
      <div id="body_stuff_a">
        <div id="testing_a">
          <div id="titles_a">
            <h1 id="icon_a">
              <i className="bi bi-geo-alt" />
            </h1>

            <p id="subheading_a">Province</p>
          </div>
          <div id="form_contents_a">
            <form action="" className="signInForm" id="form">
              <select name="Provinces" id="provinces">
                <option value="volvo">Quebec</option>
                <option value="volvo">Ontario</option>
              </select>
            </form>

            <br />
            <button type="button" id="main__btn_a">
              Next
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
