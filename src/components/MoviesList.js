import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
    const renderMovies = Object.keys(movies).map((movieID) => (
        <li key={movieID}>
            <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
        </li>
    ));

    return <ul>{renderMovies}</ul>;
}

export default MoviesList;

/*--In MoviesList.js, iterate through the
movies object and create a dynamic Link 
for each movie using its id.

--Use Object.Keys method to get an array of keys
 then map over this array.

 --The keys in the object are also the ID values
  of the movies thus reffered to as movieID

  --{movies[movieID].title} is what will display the movie title.

  --return renderMovies prop which contains the movies list.
  --Movies list is rendered in movies page*/

