import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import { ProtectedRoute } from './components/ProtectedRoute.js';
import { useState } from 'react';

function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute isLogin={isLogin}>
            <Homepage />
          </ProtectedRoute>
        }>
          <Route exact path='/home' element={<Homepage />} />
        </Route>
        <Route exact path='/login' element={<Login setIsLogin={setIsLogin} />} />

        <Route exact path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
