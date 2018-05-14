import React from 'react';
import { render as r } from 'react-dom';
import Tasker from './Tasker';

r(
  <div><Tasker /></div>,
  document.querySelector('.cont'),
);
