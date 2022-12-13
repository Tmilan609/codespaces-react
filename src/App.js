import './App.css';
import Home from './components/Home';
import React from 'react';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

import searchPage from './components/SearchPage';




export default function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}>

          </Route>
          <Route path="/search" element={<searchPage/>}>

          </Route>
        </Routes>
      </Router>
     <Home />
    </div>
  );
}

//export default App;