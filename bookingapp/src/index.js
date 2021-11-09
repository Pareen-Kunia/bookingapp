import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AdminPanel /> */}
    <SignIn />
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/" element={<App />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/signin" element={<SignIn />} />
//       </Switch>
//   </BrowserRouter>
// )
