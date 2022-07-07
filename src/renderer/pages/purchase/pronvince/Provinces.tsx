import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Provinces.css';

export default function ProvinceView() {
  const [province, setProvince] = useState<string>('qc');
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
              <select
                name="Provinces"
                id="provinces"
                onChange={(e) => setProvince(e.target.value)}
              >
                <option value="qc">Quebec</option>
                <option value="on">Ontario</option>
              </select>
            </form>

            <br />
            <Link to={`/selectStore?province=${province}`}>
              <div id="main__btn_a">Next</div>
            </Link>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
