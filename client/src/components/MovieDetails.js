import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate  } from '@reach/router';

const MovieDetails = (props) => {
    //create state to hold the movie details
    const [ movie, setMovie] = useState({}); //will need to retrieve an object.
    
    // useEffect to retrieve data from the API
    useEffect(() => {
    // axios call to get the details
    axios.get("http://localhost:8000/api/movies/" + props.id)
        .then((res) => {
            console.log(res.data); // Is the default locaton where the data is located
            // setState with the details from the API
             setMovie(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    
    }, [props.id]);

    return(
        <div>
            <h1>Movie Details</h1>
            {/* Show the details */}
            <p>Title: {movie.title}</p>
            <p>Genre: {movie.genre}</p>
            <p>Producer: {movie.producer}</p>
            <p>Length: {movie.length}</p>
            <p>Production Date: {movie.dateProduction}</p>
            <p>Rating: {movie.rating}</p>
            {/* Return to all movies button /link */}
            <Link to={"/movies"}>
                <button>Back to All Movies</button>
            </Link>
            {/* Edit Button */}
            <Link to={"/movies/" + props.id + "/edit"}>
                <button>Edit {movie.title}</button>
            </Link>
        </div>
    )
}

export default MovieDetails;
