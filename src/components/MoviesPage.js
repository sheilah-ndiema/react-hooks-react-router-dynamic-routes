import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  //console.log(match);
  //calling useRoutematch gives us an object that 
  //contains the current url

  return (
    <div>
      <MoviesList movies={movies} />
      {/* Adding code to show a message to the user to select a movie if they haven't yet */}
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>

      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}

export default MoviesPage;

/*---the movies page renders the movies list and the 
movies show components.

--we import the useRouteMatch hook from react Router which
will be used to identify the matched route.

--calling useRouteMatch inside our component gives us an object
containing the current URL. we have assigned that object the
variable match which is used to specify which content to render

**--match.url gives the vedios part of the url and we append 
:movie ID for the particular vedio we want to display

--pecifically, match.url gives us the /videos part of the url, 
and we append the :movieId for the particular video we want to
 display. :movieId represents a parameter. 
 If we visit http://localhost:3000/movies/1, the value of
  movieId will be "1".

  --remember in movies list when movies are mapped, each movie
  gets a unique pathin the to={} attribute



-- import useRouteMatch and create the child 
route by combining the current url with the 
:movie_id parameter; inside the child route, 
render <MovieShow>, passing the movies object as props*/
