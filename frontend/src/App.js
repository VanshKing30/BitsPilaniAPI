import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return(
    <div className=''>
        <Routes>
            <Route path='/' element = {<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
    </div>
  )
}

export default App;
