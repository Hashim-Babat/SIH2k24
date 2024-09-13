import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Multihospital from './Pages/Multihospital';
import Specifichospital from './Pages/Specifichospital';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/multi-hospital" element={<Multihospital/>}/>
            <Route path="/specific-hospital" element={<Specifichospital/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
