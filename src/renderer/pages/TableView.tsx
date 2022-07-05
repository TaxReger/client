import { getAccount, signOut, useAuthContext } from 'renderer/funcs/auth';

export default function TableView() {
  const { setAccount, account } = useAuthContext();
  const handleSignOut = async () => {
    signOut();
    setAccount(getAccount());
  };
  return (
    <div>
      <p> Hello {account?.email.split('@')?.[0]}, How are things?</p>
      <p>Table View Goes here.</p>
      <button onClick={handleSignOut} type="button">
        Sign Out
      </button>
    </div>
  );
}
