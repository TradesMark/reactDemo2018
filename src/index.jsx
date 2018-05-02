import React from 'react';
import { render as r } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import Counter from './Counter';

const f = 'DD.MM.YYYY HH:mm:ss';

const App = () => (
  <div><Counter stars="3" />
    <DatePicker
      onChange={(n = null, date) => alert(moment(date).format(f))}
      floatingLabelText="Выберите дату!"
    />
  </div>);

r(
  <MuiThemeProvider><App /></MuiThemeProvider>,
  document.querySelector('.cont'),
);
