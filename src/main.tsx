import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ChakraWrapper } from './components/ChakraWrapper';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraWrapper>
      <App />
    </ChakraWrapper>
  </React.StrictMode>
);