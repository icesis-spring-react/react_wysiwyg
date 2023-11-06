import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/directors">Directors</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/movies-by-director">Movies by Director</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
