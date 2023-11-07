import { useState } from "react";
import "../styles/MoviesByDirectorTable.css";

import React from 'react'

export const MoviesByDirectorTable = () => {
    function filter() {
        const director = props.directors.find(director => director.id === directorId);

        if (director) {
            const moviesByDirector = props.movies.filter(movie => movie.directorID === director.id);
            setFilteredMovies(moviesByDirector);
        }
    }

    const [filteredMovies, setFilteredMovies] = useState([]);
    const [directorId, setDirectorId] = useState('');

    return (
        <div className="container">
            <h1>Películas por director</h1>

            <p>Ingresa el id del director que deseas:</p>
            <input type="text" id="filtered-director-id" value={ directorId } onChange={ (e) => setDirectorId(e.target.value) }></input>
            <button onClick={ filter }>Filtrar</button>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Género</th>
                        <th>ID del director</th>
                        <th>Fecha de lanzamiento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredMovies.map((movie) => {
                            return (
                                <tr key={ movie.id }>
                                    <td>{ movie.id }</td>
                                    <td>{ movie.name }</td>
                                    <td>{ movie.genre }</td>
                                    <td>{ movie.directorID }</td>
                                    <td>{ movie.releaseDate }</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}


// function MoviesByDirectorTable(props) {

//     function filter() {
//         const director = props.directors.find(director => director.id === directorId);

//         if (director) {
//             const moviesByDirector = props.movies.filter(movie => movie.directorID === director.id);
//             setFilteredMovies(moviesByDirector);
//         }
//     }

//     const [filteredMovies, setFilteredMovies] = useState([]);
//     const [directorId, setDirectorId] = useState('');

//     return (
//         <div className="container">
//             <h1>Películas por director</h1>

//             <p>Ingresa el id del director que deseas:</p>
//             <input type="text" id="filtered-director-id" value={ directorId } onChange={ (e) => setDirectorId(e.target.value) }></input>
//             <button onClick={ filter }>Filtrar</button>

//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Nombre</th>
//                         <th>Género</th>
//                         <th>ID del director</th>
//                         <th>Fecha de lanzamiento</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         filteredMovies.map((movie) => {
//                             return (
//                                 <tr key={ movie.id }>
//                                     <td>{ movie.id }</td>
//                                     <td>{ movie.name }</td>
//                                     <td>{ movie.genre }</td>
//                                     <td>{ movie.directorID }</td>
//                                     <td>{ movie.releaseDate }</td>
//                                 </tr>
//                             );
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default MoviesByDirectorTable;