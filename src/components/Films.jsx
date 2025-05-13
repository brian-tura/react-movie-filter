import React from 'react'
import films from '../../filmList'

const Films = () => {
    return (
        <ul>
            {films.map((film) => {
                return <li>{film.title} {film.genre}</li>
            })}
        </ul>
    )
}

export default Films