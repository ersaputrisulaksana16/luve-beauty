import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Titik masuk utama untuk merender komponen App ke elemen root
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
