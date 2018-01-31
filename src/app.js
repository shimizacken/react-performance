import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/mainContainer';
import Users from './components/users';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/main.css';
import './styles/second.css';
import './styles/controls.scss';

const App = () => (
  <MainContainer>
    <Users />
  </MainContainer>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);