import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'renderer/funcs/hooks';
import { addNewStore } from 'renderer/funcs/networking';
import './AddStore.css';

const AddStorePage: React.FC = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const prov = query.get('prov');
  const isON = prov === 'on';
  // State
  const [storeName, setStoreName] = useState('');
  const [storeAddress, setStoreAddress] = useState('');
  const [hst, setHST] = useState('');
  const [tvq, setTVQ] = useState('');
  const [tps, setTPS] = useState('');
  if (!prov) return <div> Invalid Province </div>;

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await addNewStore(
        storeName,
        storeAddress,
        hst,
        tps,
        tvq,
        prov
      );

      navigate(`/purchase/new?prov=${prov}&store=${JSON.stringify(data)}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="main-container">
        <form onSubmit={handleSubmit}>
          <div className="section">
            <div>
              <p id="section_header"> Store Info</p>
            </div>
            <input
              type="text"
              required
              placeholder="Name"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="Address"
              value={storeAddress}
              onChange={(e) => setStoreAddress(e.target.value)}
            />
          </div>

          <div className="section">
            <div>
              <p id="section_header"> Tax Info</p>
            </div>
            {isON && (
              <input
                type="text"
                required
                placeholder="HST Number"
                value={hst}
                onChange={(e) => setHST(e.target.value)}
              />
            )}
            {!isON && (
              <input
                type="text"
                placeholder="TVQ Number"
                value={tvq}
                onChange={(e) => setTVQ(e.target.value)}
              />
            )}
            {!isON && (
              <input
                type="text"
                placeholder="TPS Number"
                value={tps}
                onChange={(e) => setTPS(e.target.value)}
              />
            )}
          </div>

          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddStorePage;
