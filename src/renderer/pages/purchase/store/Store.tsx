import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'renderer/funcs/hooks';
import { searchStores } from 'renderer/funcs/networking';
import './Store.css';

export default function StoreView() {
  const query = useQuery();
  const prov = query.get('province');
  const [store, setStore] = useState<any | null>(null);
  const [result, setResult] = useState<any[]>([]);

  const [text, setText] = useState('');
  if (!prov || !['on', 'qc'].includes(prov))
    return <div> Well How did you get here </div>;
  const province = prov === 'on' ? 'Ontario' : 'Quebec';

  const handleSearch = async () => {
    try {
      const data = await searchStores(text, prov);
      setResult(data);
    } catch (err) {
      console.log(err);
    }
  };
  const addNewComponent = (
    <div className="add-store-dialog">
      Can&apos;t Find your store?{' '}
      <Link to={`/store/new?prov=${prov}`}>Add New Store</Link>
    </div>
  );
  return (
    <div>
      <div id="body_b">
        <div id="testing_b">
          <div id="titles">
            <h1 id="icon_b">
              <i className="bi bi-shop" />
            </h1>

            <p id="subheading_b">{province} Stores </p>
          </div>
          <div id = "lower_stuffs">
          <div className="search-container">
            <div className="search-bar">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button type="button" onClick={handleSearch}>
              <i className="bi bi-search"></i>
              </button>
            </div>
            {result.length >= 1 ? (
              <div className="dropdown">
                {result.map((v) => {
                  return (
                    <Link
                      to={`/purchase/new?prov=${prov}&store=${JSON.stringify(
                        v
                      )}`}
                      key={v.id}
                    >
                      <div className="dropdown-row">
                        <span className="title"> {v.name}</span>
                        <span className="address"> {v.address}</span>
                      </div>
                    </Link>
                  );
                })}
                {addNewComponent}
              </div>
            ) : (
              addNewComponent
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
