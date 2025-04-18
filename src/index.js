import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// This function injects the Content Security Policy (CSP) into public/index.html document
export function setContentSecurityPolicy() {
  let connectSrc = [
    "'self'",
    "https://firebaseinstallations.googleapis.com",
    "https://firebase.googleapis.com",
    "https://www.google-analytics.com",
    "https://codewiththepros-backend.onrender.com"
  ];

  if (process.env.NODE_ENV === 'development') {
    // Only add localhost/127.0.0.1 during development
    connectSrc.push("http://localhost", "http://127.0.0.1");
  }

  const cspContent = `connect-src ${connectSrc.join(' ')};`;

  const cspMetaTag = document.getElementById('dynamic-csp');
  if (cspMetaTag) {
    cspMetaTag.setAttribute('http-equiv', 'Content-Security-Policy');
    cspMetaTag.setAttribute('content', cspContent);
  }
}

setContentSecurityPolicy();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
