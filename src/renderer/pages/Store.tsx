import './Store.css';

export default function StoreView() {
  return (
    <div>
      <div id="body_b">
        <div id="testing_b">
          <div id="titles">
            <h1 id="icon_b">
              <i className="bi bi-shop" />
            </h1>

            <p id="subheading_b">Store </p>
          </div>
          <div id="form_contents">
            <form action="" className="signInForm" id="form">
              <select name="Provinces" id="store_options">
                <option value="volvo">Choose a store</option>
                <option value="volvo">Add a store</option>
              </select>
            </form>

            <br />
            <button type="button" id="main__btn_b">
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
