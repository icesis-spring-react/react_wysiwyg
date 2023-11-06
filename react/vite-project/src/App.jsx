import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import Login from './components/Login';
import LoginService from './services/LoginService';
import APIRestService from './services/APIRestService';

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

            console.log(movies);
        }
    }, [isLoggedIn]);

    const handleLogin = (isUserLoggedIn) => {
        setLoggedIn(isUserLoggedIn);
    };


    return (
        <Router>
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
                    <Route path="/home" element={<Home/>} />
                    <Route path="/login" element={<Login onLogin={ handleLogin }/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
