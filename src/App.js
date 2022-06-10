
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';

import Navbar from './component/Navbar';
import ProjectDetails from './Pages/Details/ProjectDetails';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
          <Route path="/details/:id" element={<ProjectDetails/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
