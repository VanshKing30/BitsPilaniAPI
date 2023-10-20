// import React from 'react';
// import './App.css';
// import Home from './pages/Home';
// import { Route,Routes} from 'react-router-dom';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import MenuPage from './pages/MenuPage';
// import About from './pages/About';
// import ContactUs from './pages/ContactUs';
// import SectionPage from './pages/SectionPage';


// function App() {
//   return(
//     <div className=''>
//         <Routes>
//             <Route path='/' element = {<Login/>}></Route>
//             <Route path='/home' element={<Home/>}></Route>
//             <Route path='/signup' element={<Signup/>}></Route>
//             <Route path='/about' element={<About/>}></Route>
//             <Route path='/contact' element={<ContactUs/>}></Route>
//             <Route path='/section' element={<SectionPage/>}></Route>
//             <Route path="/menu/:id" element={<MenuPage/>}></Route>
//         </Routes>
//     </div>
//   )
// }

// export default App;



import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MenuPage from './pages/MenuPage';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import SectionPage from './pages/SectionPage';
import bgimg8 from "./assets/bgimg8.avif";

const Layout = ({ children }) => {
  return (
    <div className="bg-cover bg-center min-h-screen " 
    style={{
      backgroundImage: `url(${bgimg8})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
    >
      {children}
    </div>
  );
};

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Layout><Home /></Layout>} />
        <Route path='/signup' element={<Layout><Signup /></Layout>} />
        <Route path='/about' element={<Layout><About /></Layout>} />
        <Route path='/contact' element={<Layout><ContactUs /></Layout>} />
        <Route path='/section' element={<Layout><SectionPage /></Layout>} />
        <Route path="/menu/:id" element={<Layout><MenuPage /></Layout>} />
      </Routes>
    </div>
  );
}

export default App;

