import { createRoot } from 'react-dom/client';
import App from './App';
import AuthProvider from './pages/AuthProvider';
import Layout from './pages/Layout';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <AuthProvider>
    <Layout>
      <App />
    </Layout>
  </AuthProvider>
);

// // calling IPC exposed from preload script
// window.electron.ipcRenderer.once('ipc-example', (arg) => {
//   // eslint-disable-next-line no-console
//   console.log(arg);
// });
// window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
