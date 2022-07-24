import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyled from './styles/globalstyle';

const element = (<div>
  <GlobalStyled />
  <BrowserRouter>
    <App />
  </BrowserRouter>
</div>)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 element
);
