import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the required router components
import './App.css';
// import LogAdmin from './Dashboard/LogAdmin'; // Import your LogAdmin component
// import AuthError from './Dashboard/AuthError'; // Import your AuthError component
import MyHome from './components/MyHome';
import MyProfile from './components/MyProfile';
import ContactUs from './components/ContactUs';
import Nav from './components/Nav';
import MyMainForm from './MyMainForms/MyMainForm';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       {/* Default route to LogAdmin component */}
    //       <Route path="/" element={<LogAdmin />} />
          
    //       {/* Route to display the AuthError component */}
    //       <Route path="/auth-error" element={<AuthError />} />
    //     </Routes>
    //   </div>
    // </Router>

    <Router>
      <Nav/>
      <div className="container">
        <Routes>
          <Route path ="/" element ={<MyHome/>} />
          <Route path ="/profile" element ={<MyProfile/>} />
          <Route path ="/contact" element ={<ContactUs/>} />
          <Route path ="/mymainforms/*" element ={<MyMainForm/>} />
          <Route path ="*" element ={<h2> 404 Not Found </h2>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
