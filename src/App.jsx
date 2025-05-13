import './App.css'
import { useState, useEffect } from 'react'

const films = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {
  const [filteredFilms, setFilteredFilms] = useState(films);
  const [filmOptions, setFilmOptions] = useState([]);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    if (genre !== "") {
      const selectedfilms = films.filter((film) => film.genre === genre
      )
      setFilteredFilms(selectedfilms)
    } else {
      setFilteredFilms(films)
    }
  }, [genre])

  setFilmOptions(() => {
    
  })

  return (
    <main>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="">Seleziona il genere</option>
        {films.map((film) => {
          return (
            <option value={film.genre}>{film.genre}</option>
          )
        })}
      </select>
      <ul>
        {filteredFilms.map((film) => {
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

export default App
