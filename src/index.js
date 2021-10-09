import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyled from './styles/globalstyle';

const element = (<div>
  <GlobalStyled />
  <BrowserRouter>
    <App />
  </BrowserRouter>
</div>)
ReactDOM.render(element, document.getElementById('root')
);
