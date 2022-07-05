import './Provinces.css';

export default function ProvinceView() {
  return (
    <div>
      <div id="body_stuff">
        <div id="testing">
          <div id="titles">
            <h1 id="icon">
              <i className="bi bi-geo-alt" />
            </h1>

            <p id="subheading">Provinces</p>
          </div>
          <div id="form_contents">
            <form action="" className="signInForm" id="form">
              <select name="Provinces" id="provinces">
                <option value="volvo">Quebec</option>
                <option value="volvo">Ontario</option>
              </select>
            </form>

            <br />
            <button type="button" id="main__btn">
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
