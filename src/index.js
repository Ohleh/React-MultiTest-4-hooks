import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import AuthProvider from './components/ContexHook/AuthProvider';

console.log(authContext);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider />
    {/* <authContext.Provider value={{ name: 'mango' }}> */}
    {/* value це значення контектса.
       виходить все що знаходититься в сеоредині app 
       отримує доступ до Provider тобто до його значення - об'єкта */}
    <App />
    {/* </authContext.Provider> */}
    <AuthProvider />
  </React.StrictMode>
);
