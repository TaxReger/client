import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignInView from './pages/SignIn';
import TableView from './pages/TableView';

const Gateway = () => {
  const [isSignedIn, setisSignedIn] = useState(false);

  if (!isSignedIn) return SignInView();
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
