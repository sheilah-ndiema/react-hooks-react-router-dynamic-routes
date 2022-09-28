import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
    // call useParams to access the `params` from the url
    const params = useParams();
    console.log(params);

    return (
        <div>
            {/* And here we access the `movieId` stored in
             `params` to render information about the 
             selected movie */}
            <h3>{movies[params.movieId].title}</h3>
        </div>
    );
}

export default MovieShow;

/*--Movies show is a child of movies page. 

--In MovieShow.js, import useParams; use the :movie_id 
from the params object to access the correct movie 
from the movies object
 and display it on the page

The useParams hook returns an object of key/value pairs 
of the dynamic params from the current URL that were 
matched by the <Route path>. Child routes inherit all
 params from their parent routes.*/
