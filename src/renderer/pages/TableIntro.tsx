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
            <button type="button" id="main__btns">
              View Table
              <i className="bi bi-binoculars" id="bi_icons" />
            </button>
            <button type="button" id="main__btns">
              Export Table
              <i className="bi bi-download" id="download_icons" />
            </button>
            <button type="button" id="main__btns">
              Add new Records
              <i className="bi bi-plus-circle" id="plus_icons" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
