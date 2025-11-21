import React from 'react';
import Landing from './pages/landingPage/Landing';
import Signup from './pages/auth/Signup';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import EsimPlans from './pages/EsimPlans';
import Payment from './pages/Payment';


const App = () => {

  return (
    <Routes>

      <Route path='/' element={<Landing />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/esim-plans' element={<EsimPlans />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/dashboard/*' element={<Dashboard />} />

    </Routes>
  );
};

export default App;