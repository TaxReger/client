import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './SignIn.css';
import ProvinceView from './pages/purchase/Provinces';
import SignInView from './pages/authentication/SignIn';
import TableIntroView from './pages/TableIntro';
import TableView from './pages/TableView';
import PasswordResetView from './pages/PasswordReset';
import StoreView from './pages/Store';
import SearchStoreView from './pages/searchstore';
import OntarioFormView from './pages/OntarioForm';
import QuebecFormView from './pages/QuebecForm';
import InvoicesearchView from './pages/Invoicesearch';

const Gateway = () => {
  const { account } = useAuthContext();

  if (!account) return  InvoicesearchView();
  return TableIntroView();
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gateway />} />
        <Route path="signUp" element={<SignUpView />} />
        <Route path="resetPassword" element={<PasswordResetView />} />
        <Route path="newPurchase" element={<ProvinceView />} />
        <Route path="export" element={<ExportPage />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}
