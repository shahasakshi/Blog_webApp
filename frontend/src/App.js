import React from 'react'
import Topbar from './Topbar/Topbar';
import Home from './Pages/Home/Home'
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import Settings from './Pages/Settings/Settings';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
}from 'react-router-dom';

const App = () => {
   
  const user = false;


  return (
    <Router>
    <Topbar/>
    <Routes>
      <Route path='/' element={<Home />}>
       {/* <Home /> */}
       </Route>
       <Route path='/register' element={user ? <Home/> : <Register/>}/>
       <Route path='/login' element={user ? <Home/> :<Login/>}/>
       <Route path='/write' element={user ? <Write/> :<Register/>}/>
       <Route path='/settings' element={user ? <Settings/> :<Register/>}/>
       <Route path='/post/:postId' element={<Single/>}/>
      </Routes>
      
    
    
   
  
    </Router>
  );
}

export default App
