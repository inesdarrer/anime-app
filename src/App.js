import React from 'react';
import AnimeCollection from './AnimeCollection';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import './App.css';
import Anime from './Anime';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AnimeCollection />} />
        <Route path='/anime/:id' element={<Anime />} />
      </Routes>
    </BrowserRouter >

  );
}

export default App;
