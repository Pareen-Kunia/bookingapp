import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ContactUs from './ContactUs';
import AdminPanel from './components/AdminPanel';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

const ReactRouter = () => {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} /> {/*Replace the App with Landing Page*/}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/admin" element={<AdminPanel />} />
      </Routes>
  </Router>
  )
}

ReactDOM.render(
  <React.StrictMode> 
    <ReactRouter />
    {/* <App /> */}
    <AdminPanel />
    {/* <SignIn /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

