import React from 'react';
import Landing from './pages/landingPage/Landing';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import EsimPlans from './pages/EsimPlans';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ManageEsims from './pages/ManageEsims';


const App = () => {

  return (
    <Routes>

      <Route path='/' element={<Landing />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/esim-plans' element={<EsimPlans />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/manage-esims' element={<ManageEsims />} />
      <Route path='/dashboard/*' element={<Dashboard />} />

    </Routes>
  );
};

export default App;