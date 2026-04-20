import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';

console.log('ArcadeX Kernel Initializing (JS Core)...');

const rootElement = document.getElementById('root');
if (rootElement) {
  try {
    console.log('Target root found. Mounting application...');
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
    console.log('Mount call completed.');
  } catch (err) {
    console.error('Mounting failed:', err);
    rootElement.innerHTML = `<div style="color: #ff3e81; padding: 20px;">
      <h1>Mounting Error</h1>
      <pre>${err.message}</pre>
    </div>`;
  }
} else {
  console.error('CRITICAL: Root element not found in DOM.');
}
