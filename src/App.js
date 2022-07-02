
import * as React  from 'react';
import {  Sugar } from 'react-preloaders';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';

import Navbar from './component/Navbar';
import Blog from './Pages/Blog/Blog';
import ProjectDetails from './Pages/Details/ProjectDetails';

const Home = React.lazy(() => import('./Pages/Home/Home'));
function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          
            <Route path='/' element={<Home />} />

            <Route path='/home' element={
              <React.Suspense fallback={<Sugar/>}>
                <Home />
              </React.Suspense>
            } />
            <Route path='/blog' element={<Blog />} />
            <Route path="/details/:id" element={<ProjectDetails />} />
          
        </Routes>
        <Footer />
      

    </>
  );
}

export default App;
