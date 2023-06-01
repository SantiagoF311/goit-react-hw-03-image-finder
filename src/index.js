import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import ReactModal from "react-modal";
import './index.css';

ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
