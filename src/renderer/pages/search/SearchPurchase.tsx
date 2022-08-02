import './SearchPurchase.css';
import { useState } from 'react';
import { searchPurchases } from 'renderer/funcs/networking';
import { Link } from 'react-router-dom';

export default function SearchStoreView() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const handleSearch = async () => {
    if (!query) return;

    try {
      setResults(await searchPurchases(query));
    } catch (error) {
      console.log(error);
      window.alert('Error');
    }
  };
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
                  placeholder="Enter Invoice Number"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(e) => {
                    setQuery(e.target.value);

                    if (!query) setResults([]);
                  }}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleSearch}
                >
                  search
                </button>
              </div>
            </form>
          </div>
          {results.length >= 1 && (
            <div className="dropdown">
              {results.map((v: any) => {
                return (
                  <div key={v.id}>
                    <Link
                      to={`/purchase/edit?prov=${
                        v.store.provinceId
                      }&purchase=${JSON.stringify(v)}`}
                      key={v.id}
                    >
                      <div className="dropdown-row">
                        <span className="title"> {v.itemName}</span>
                        <span className="address">
                          {v.invoiceNumber} <br />${v.cost}
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
