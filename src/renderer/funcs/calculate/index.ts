import {
  ON_HST,
  ON_GST,
  ON_PST,
  QC_GST,
  QC_QST,
  ON_TX_PCT,
  QC_TX_PCT,
} from '../constants';

const caOntario = (cost: number) => {
  return cost * ON_TX_PCT + cost;
};

const caQuebec = (cost: number) => {
  return cost * QC_TX_PCT + cost;
};

export default function calculate(cost: number, provinceId: number) {
  let costAfter: number;
  if (provinceId === 1) {
    // Ontario
    costAfter = caOntario(cost);
    const HST = cost * ON_HST;
    const GST = cost * ON_GST;
    const PST = cost * ON_PST;
    return {
      costBeforeTaxes: cost,
      costAfterTaxes: costAfter,
      HST,
      PST,
      GST,
      QST: 0,
    };
  }
  // Quebec
  costAfter = caQuebec(cost);
  const GST = cost * QC_GST;
  const QST = cost * QC_QST;

  return {
    costBeforeTaxes: cost,
    costAfterTaxes: costAfter,
    HST: 0,
    PST: 0,
    GST,
    QST,
  };
}
