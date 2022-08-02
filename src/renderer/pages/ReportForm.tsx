import { Link } from 'react-router-dom';
import './ReportForm.css';

export default function ReportFormView() {
  return (
    <div>
      <div id="body_stuff">
        <h1 id="file_icon">
          <div className="shadow-lg p-20 mb-10 bg-white rounded" id="shadow">
            <i className="bi bi-file-plus" />
          </div>
        </h1>

        <div id="testing">
          <div id="titles">
            <p id="subheading">Report Form</p>
          </div>
          <div id="form_contents">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  GST/HST Account Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                />
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <label htmlFor="exampleInputPassword1">
                    Quebec Enterprise Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder=""
                  />
                </div>
                <div className="col">
                  <br />
                  <label htmlFor="exampleInputPassword1">
                    Identification Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder=""
                  />
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="exampleInputPassword1">Telephone </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder=""
                  />
                </div>

                <br />
                <br />
              </div>
              <div className="row">
                <div className="col">
                  <br />
                  <label htmlFor="exampleInputPassword1">Province</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Quebec"
                    disabled
                  />
                </div>
                <div className="col">
                  <br />
                  <label htmlFor="exampleInputPassword1">Postal Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="J8P 6H4"
                    disabled
                  />
                  <br />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  Canada Revenue Agency Registration Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder=""
                />
                <br />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  Fiscal Year End Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder=""
                />
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder=""
                  />
                </div>
                <br />

                <input
                  type="submit"
                  className="btn btn-secondary"
                  id="save_btn"
                />
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
