import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import calculate from 'renderer/funcs/calculate';
import { useQuery } from 'renderer/funcs/hooks';
import { addNewPurchase, editPurchase } from 'renderer/funcs/networking';

const EditPurchasePage: React.FC = () => {
  const query = useQuery();
  const province = query.get('prov');
  const purchase = JSON.parse(query.get('purchase') ?? '');
  console.log(purchase);
  const [date, setDate] = useState(new Date(purchase.dateOfInvoice));
  const [itemName, setItemName] = useState(purchase.itemName);

  const [beneficiary, setBeneficiary] = useState(purchase.beneficiary);
  const [invoiceNumber, setInvoiceNumber] = useState(purchase.invoiceNumber);
  const [chequeTotal, setChequeTotal] = useState('');

  const [breakdown, setBreakDown] = useState(
    calculate(purchase.cost, province === 'on' ? 1 : 2)
  );

  const navigate = useNavigate();
  if (!purchase || !province)
    return <div> Purchase or Province not Provided</div>;

  const handleCostBeforeChange = (value: number) => {
    const calc = calculate(value, province === 'on' ? 1 : 2);
    setBreakDown(calc);

    console.log(value);
  };

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    console.log(breakdown);

    try {
      const data = await editPurchase(
        purchase.id,
        breakdown.costBeforeTaxes,
        itemName,
        date,
        beneficiary,
        invoiceNumber
        // chequeTotal
      );

      navigate('/');
    } catch (err: any) {
      window.alert(err.message);
      console.log(err);
    }
  };
  return (
    <div>
      <div id="purchase_body">
        <h1 id="file_icon">
          <div className="shadow-lg p-20 mb-10 bg-white rounded" id="shadow">
            <i className="bi bi-file-plus" />
          </div>
        </h1>
        <div id="form_container">
          <div id="titles">
            <p id="subheading">Add New Record</p>
          </div>
          <div id="form_contents">
            <form id="change" onSubmit={handleSubmit}>
              <div id="form_section">
                <div className="form-group">
                  <label htmlFor="purchaseDate">
                    Date of Invoice
                    <input
                      type="date"
                      className="form-control"
                      id="purchaseDate"
                      value={date.toISOString().split('T')[0]}
                      onChange={(e) => setDate(new Date(e.target.value))}
                      required
                    />
                  </label>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="itemName">
                      Item Name
                      <input
                        type="text"
                        className="form-control"
                        id="itemName"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="costBefore">
                      Cost before Taxes
                      <input
                        type="number"
                        className="form-control"
                        id="costBefore"
                        placeholder="$0.00"
                        min="1"
                        step="any"
                        value={breakdown.costBeforeTaxes}
                        onChange={(e) => {
                          handleCostBeforeChange(
                            parseFloat(e.target.value) || 1
                          );
                        }}
                        required
                      />
                    </label>
                  </div>
                  <div className="col">
                    <label htmlFor="costAfter">
                      Cost after Taxes
                      <input
                        type="text"
                        className="form-control"
                        id="costAfter"
                        placeholder={`$${breakdown.costAfterTaxes.toFixed(2)}`}
                        disabled
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="hst">
                    HST
                    <input
                      type="text"
                      className="form-control"
                      id="hst"
                      placeholder={`$${breakdown.HST.toFixed(2)}`}
                      disabled
                    />
                  </label>
                </div>
                <div className="col">
                  <label htmlFor="pst">
                    PST
                    <input
                      type="text"
                      className="form-control"
                      id="pst"
                      placeholder={`$${breakdown.PST.toFixed(2)}`}
                      disabled
                    />
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="gst">
                  GST
                  <input
                    type="text"
                    className="form-control"
                    id="gst"
                    placeholder={`$${breakdown.GST.toFixed(2)}`}
                    disabled
                  />
                </label>
                <label htmlFor="qst" id="label_qst">
                  QST
                  <input
                    type="text"
                    className="form-control"
                    id="qst"
                    placeholder={`$${breakdown.QST.toFixed(2)}`}
                    disabled
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="beneficiary">
                  Beneficiary
                  <input
                    type="text"
                    className="form-control"
                    id="beneficiary"
                    placeholder=""
                    value={beneficiary}
                    onChange={(e) => setBeneficiary(e.target.value)}
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="invoiceNumber">
                  Invoice Number
                  <input
                    type="text"
                    className="form-control"
                    id="invoiceNumber"
                    placeholder=""
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </label>

                <div className="form-group">
                  <label htmlFor="chequeNumber">
                    Cheque Total
                    <input
                      type="text"
                      className="form-control"
                      id="chequeNumber"
                      placeholder=""
                      value={chequeTotal}
                      onChange={(e) => setChequeTotal(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <input
                type="submit"
                className="btn btn-secondary"
                id="save_btn"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPurchasePage;
