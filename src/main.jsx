import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './pages/App.jsx';
import GlobalStyles from './styles.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
    <ToastContainer />
  </React.StrictMode>,
);
