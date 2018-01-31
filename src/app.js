import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/mainContainer';

import './styles/main.scss';

const App = () => (
  <MainContainer />
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);