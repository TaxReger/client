import { Component, useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthContext, setAccount, useAuthContext } from './funcs/auth';
import SignInView from './pages/SignIn';
import TableView from './pages/TableView';

const Gateway = () => {
  const { account } = useAuthContext();

  if (!account) return SignInView();
  return TableView();
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gateway />} />
      </Routes>
    </Router>
  );
}
