import { Link } from 'react-router-dom';
import './TableIntro.css';

export default function TableIntroView() {
  return (
    <div>
      <div id="body_stuffing">
        <div id="testing_stuff">
          <div id="titles_stuff">
            <h1 id="icon_stuff">
              <i className="bi bi-table" />
            </h1>

            <p id="subheading_stuff"> </p>
          </div>
          <div id="form_contents_stuff">
            <Link to="/search">
              <div id="main__btns">
                Search Table
                <i className="bi bi-binoculars" id="bi_icons" />
              </div>
            </Link>
            <Link to="/export">
              <div id="main__btns">
                Export Table
                <i className="bi bi-download" id="download_icons" />
              </div>
            </Link>
            <Link to="/purchase/flow">
              <div id="main__btns">
                Add new Records
                <i className="bi bi-plus-circle" id="plus_icons" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
