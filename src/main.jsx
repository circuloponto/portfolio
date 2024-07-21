import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ParallaxProvider } from 'react-skrollr';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider
      init={{
        smoothScrollingDuration: 500,
        smoothScrolling: true,
        forceHeight: false,
      }}
    >
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);
