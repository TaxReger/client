import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './SignIn.css';
import ProvinceView from './pages/purchase/Provinces';
import SignInView from './pages/authentication/SignIn';
import TableIntroView from './pages/TableIntro';
import PasswordResetView from './pages/authentication/PasswordReset';
import ExportPage from './pages/export/ExportPage';
import SearchPage from './pages/search/SearchPage';
import { useAuthContext } from './funcs/auth';
import SignUpView from './pages/authentication/Signup';

const Gateway = () => {
  const { account } = useAuthContext();

  if (!account) return  SignInView();
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
