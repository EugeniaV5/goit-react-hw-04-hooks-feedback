import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { ThemeProvider } from 'styled-components';
import App from './components/App';
// import { theme } from './components/constants/theme';

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
