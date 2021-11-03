import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './SignUp';
import OAuthSignIn from './OAuthSignIn';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <SignUp />
    {/* <OAuthSignIn /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
