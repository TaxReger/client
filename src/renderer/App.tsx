import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './SignIn.css';
import ProvinceView from './pages/purchase/pronvince/Provinces';
import SignInView from './pages/authentication/SignIn';
import TableIntroView from './pages/TableIntro';
import PasswordResetView from './pages/authentication/PasswordReset';
import ExportPage from './pages/export/ExportPage';
import SearchPage from './pages/search/SearchPage';
import { useAuthContext } from './funcs/auth';
import SignUpView from './pages/authentication/Signup';
import StoreView from './pages/purchase/store/Store';
import AddStorePage from './pages/purchase/store/newStore/AddStore';
import AddPurchasePage from './pages/purchase/newPurchase/NewPurchase';
import SearchStoreView from './pages/search/searchstore';

const Gateway = () => {
  const { account } = useAuthContext();

  if (!account) return SignInView();
  return TableIntroView();
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gateway />} />
        <Route path="signUp" element={<SignUpView />} />
        <Route path="resetPassword" element={<PasswordResetView />} />
        <Route path="purchase/flow" element={<ProvinceView />} />
        <Route path="export" element={<ExportPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="selectStore" element={<StoreView />} />
        <Route path="store/new" element={<AddStorePage />} />
        <Route path="purchase/new" element={<AddPurchasePage />} />
      </Routes>
    </Router>
  );
}
