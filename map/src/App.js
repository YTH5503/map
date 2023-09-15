import { BrowserRouter as Router, Navigate, Route, Routes, Link } from 'react-router-dom';
import Navermap from './components/navermap'
import Home from './components/home';
import { useEffect, useState } from 'react';

function App() {

  return (
    <Router>
      <div className='app'>
        <nav>
          <ul>
            <>
              <li>
                <Link to="/navermap">지도보기</Link>
              </li>
            </>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/navermap"
            element={<Navermap />}
            />       
        </Routes>
      </div>
    </Router>
  );
}

export default App;