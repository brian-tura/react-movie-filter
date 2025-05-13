import React from 'react'
import films from '../../filmList'
import { useState, useEffect } from 'react'

const Main = () => {
    const [initialFilms, setInitialFilms] = useState(films);
    const [filtereMovies, setFilteredMovies] = useState(initialFilms)
    const [filmOptions, setFilmOptions] = useState([]);
    const [genre, setGenre] = useState("");

    return (
        <main>
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="">Seleziona il genere</option>
                {initialFilms.map((film) => {
                    return (
                        <option value={film.genre}>{film.genre}</option>
                    )
                })}
            </select>
            <ul>
                {initialFilms.map((film) => {
                    return (
                        <li>
                            <p>
                                {film.title}
                            </p>
                            <p>
                                - {film.genre}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Main