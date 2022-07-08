import React from 'react';
import { getAccount, signOut, useAuthContext } from 'renderer/funcs/auth';
import './Layout.css';

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  const { setAccount, account } = useAuthContext();
  const handleSignOut = async () => {
    signOut();
    setAccount(getAccount());
  };

  const userName = account?.email.split('@')?.[0];
  return (
    <div className="main__container">
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">
            Tax Registration Program{' '}
          </a>
          {!!account && (
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="button"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          )}
        </div>
      </nav>
      {children}
    </div>
  );
}
