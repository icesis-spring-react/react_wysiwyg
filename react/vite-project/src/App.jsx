import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import './styles/App.css';
import { useEffect, useState } from 'react';
import MoviesPage from './components/MoviesPage';
import Home from './components/Home';
import APIRestService from './services/APIRestService';
import Login from './components/Login';
import LoginService from './services/LoginService';

function App() {
    const [movies, setMovies] = useState([]);
    const [directors, setDirectors] = useState([]);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            LoginService.setAuthHeader();

            console.log('Token guardado: ', LoginService.getToken());
    
            APIRestService.getAllMovies().then(response =>{
                setMovies(response.data);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [isLoggedIn]);

    const handleLogin = (isUserLoggedIn) => {
        setLoggedIn(isUserLoggedIn);
    };

    const updateMoviesList = async () => {
        if (isLoggedIn) {
            try {
                LoginService.setAuthHeader();

                const response = await APIRestService.getAllMovies();
                setMovies(response.data);
            } catch (error) {
                console.error('Error actualizando la lista de películas')
            }
        } else {
            console.error('No estás logeado aún');
        }
    }
    
    return (
        <Router basename="/">
              <div>
                  <nav>
                      <ul>
                          <li>
                              <Link to="/home">Home</Link>
                          </li>
                          <li>
                              <Link to="/register">Register</Link>
                          </li>
                          <li>
                              <Link to="/login">Login</Link>
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
                      <Route path="/movies" element={isLoggedIn ? <MoviesPage movies={ movies } onMovieCreated={ updateMoviesList }/> : <Navigate to="/login"/>} />
                      <Route path="/home" element={isLoggedIn ? <Home/> : <Navigate to="/login"/>} />
                      <Route path="/login" element={<Login onLogin={ handleLogin }/>} />
                  </Routes>
            </div>
        </Router>
    );
}

export default App;