import React from 'react';
import { render as r } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

r(
  <BrowserRouter><App /></BrowserRouter>,
  document.querySelector('.cont'),
);
