import React, { useState, useEffect } from 'react';
import { Account, AuthContext, getAccount } from 'renderer/funcs/auth';

type Props = {
  children: React.ReactNode;
};
const AuthProvider: React.FC<Props> = ({ children }) => {
  const [account, setAccount] = useState<Account | null>(null);
  useEffect(() => {
    const currentUser = getAccount();
    setAccount(currentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ account, setAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
