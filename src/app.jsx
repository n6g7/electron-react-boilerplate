import React from 'react';
import ReactDOM from 'react-dom';

import SayHi from './components/SayHi';
import './style.styl';

ReactDOM.render(
  <SayHi name="Nat" />,
  document.getElementById('app')
);
