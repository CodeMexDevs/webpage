// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chatbot from './components/chatbot';
import Cursos from './components/cursos';
import Juegos from './components/juegos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/juegos" element={<Juegos />} />
      </Routes>
    </Router>  
  );
}

export default App;
