import React from 'react';
import { movies } from '../data';

const Movies = () => {

  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(m => {
          return <div> 
            {m.title}
            <br></br>
            {m.time}
            <ul>
              {m.genres.map(g => <li>{g}</li>)}
            </ul>
           
          </div>
          })
        }
    </div>

);
};

export default Movies;


