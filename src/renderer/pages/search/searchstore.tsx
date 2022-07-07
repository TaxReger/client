import './searchstore.css';

export default function SearchStoreView() {
  return (
    <div>
      <div id="body_b">
        <div id="testing_b">
          <div id="titles">
            <h1 id="icon_b">
              <i className="bi bi-search" />
            </h1>

            <p id="subheading_b">Search </p>
          </div>
          <div id="form_z">
            <form action="" className="signInForm" id="form">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search Store"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <button type="button" className="btn btn-outline-secondary">
                  search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
