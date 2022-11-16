import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// STYLE
import './assets/fonts/roboto/stylesheet.css';
import './assets/scss/main.scss';
import 'react-datepicker/dist/react-datepicker.css';

import Route from './routes';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Route />
  </BrowserRouter>,
);
