import { Component, useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './SignIn.css';
import { AuthContext, setAccount, useAuthContext } from './funcs/auth';
import ProvinceView from './pages/Provinces';
import SignInView from './pages/SignIn';
import SignUpView from './pages/Signup';
import TableIntroView from './pages/TableIntro';
import TableView from './pages/TableView';
import PasswordResetView from './pages/PasswordReset';
import StoreView from './pages/Store';
import SearchStoreView from './pages/searchstore';
import OntarioFormView from './pages/OntarioForm';
import QuebecFormView from './pages/QuebecForm';

const Gateway = () => {
  const { account } = useAuthContext();

  if (!account) return  TableIntroView();
  return TableIntroView();
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gateway />} />
        <Route path="signUp" element={<SignUpView />} />
        <Route path="resetPassword" element={<PasswordResetView />} />
      </Routes>
    </Router>
  );
}
