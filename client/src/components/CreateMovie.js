import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate  } from '@reach/router';

const CreateMovie = (props) => {
    // create state for the new movie object
    const [ errors, setErrors ] = useState({});
    const [ movie, setMovie ] = useState({
        title: "",
        genre: "",
        producer: "",
        length: 98,
        dateProduction: "",
        rating: "PG",
        isOnNetflix: true,
    });

    const genres = [
        "Action",
        "Adventure",
        "Animation",
        "Cinema Verite",
        "Comedy",
        "Drama",
        "Experimental",
        "Family",
        "Fantasy",
        "Foreign",
        "Horror",
        "Kung Fu",
        "Musical",
        "Mystery",
        "Romance",
        "Sci-Fi"
    ];

    const ratings = [
        "G",
        "PG",
        "PG-13",
        "R",
        "NR"
    ];

    // handle the form submit to create the document through the API
    const handleSubmit = (e) => {
        e.preventDefault();

        // axios to post the object to our API
        axios.post("http://localhost:8000/api/movies", movie)
        .then((res) => {
            // on success, redirect (navigate) to the movie list
            console.log(res.data);
            // if we have validation errors - Not errors with our server
            if(res.data.errors) {
                setErrors(res.data.errors)
            }
            else {
                 // on success, redirect (navigate) to the movie list
                navigate("/movies");
            }
           
        })
        .catch((err) => {
            // on failure, save the errors in state so the user can correct the bad inputs
            console.log(err);
        })
        // on success, redirect (navigate) to the movie list
        // on failure, save the errors in the state so the user can correct the bad inputs
    }

    // {
    //     "_id": "6127f93e8f1979bc5900e033",
    //     "title": "The Princess Bride",
    //     "genre": "Action",
    //     "producer": "Rob Reiner",
    //     "length": 98,
    //     "dateProduction": "1987-10-09T05:00:00.000Z",
    //     "rating": "PG",
    //     "isOnNetflix": true,
    //     "createdAt": "2021-08-26T20:27:42.970Z",
    //     "updatedAt": "2021-08-26T20:27:42.970Z",
    //     "__v": 0
    // }

    const inputChange =(e) => {
        console.log("input name:" + e.target.name);
        console.log("input value:" + e.target.value);
        console.log("input checked:" + e.target.checked);

        let newMovieObject = { ...movie };
        if(e.target.name === "isOnNetflix"){
            newMovieObject[e.target.name] = e.target.checked;
        }
        else {
            newMovieObject[e.target.name] = e.target.value; 
        }
        // newMovieObject[e.target.name] = e.target.value;
        setMovie(newMovieObject);

    }

    return(
        <div>
            <h1>Create Movie</h1>
            <form onSubmit={ (e) => handleSubmit(e) }>
            {/* labels for our inputs */}
            {/* inputs that update state as they change */}
            {/* values in the inputs that use state as the values */}
            {/* validate / display errors that come from the backend server  */}
              <div>
                <label>Title</label>
                {
                    errors.title ?
                    <span>{errors.title.message}</span>
                    : null
                }
                <input 
                    type="text"
                    name="title"
                    value={ movie.title}
                    onChange={ (e) => inputChange(e) }
                     />
              </div>
              <div>
                <label>Genre</label>
                <select 
                    name="genre" 
                    value={ movie.genre }
                    onChange={ (e) => inputChange(e) }
                    >
                    <option value=""></option>
                    {
                       genres.map((movieGenre) => (
                         <option value={movieGenre} key={movieGenre}>{movieGenre}</option>
                       )) 
                    }
                 </select>    
              </div>
              <div>
                  <label>Producer</label>
                  <input 
                    type="text"
                    name="producer"
                    value={ movie.producer }
                    onChange={ (e) => inputChange(e) }
                   />
              </div>
              <div>
                  <label>Movie Length(minutes)</label>
                  <input 
                    type="number"
                    min="30"
                    name="length"
                    value={ movie.length }
                    onChange={ (e) => inputChange(e) }
                   />
              </div>
              <div>
                  <label>Production Date</label>
                  <input 
                    type="text"
                    name="dateProduction"
                    value={ movie.dateProduction }
                    onChange={ (e) => inputChange(e) }
                   />
              </div>
              <div>
                <label>Ratings</label>
                <select 
                    name="rating" 
                    value={ movie.rating }
                    onChange={ (e) => inputChange(e) }
                    >
                    <option value=""></option>
                    {
                       ratings.map((movieRating) => (
                         <option value={movieRating} key={movieRating}>{movieRating}</option>
                       )) 
                    }
                 </select>    
              </div>
              <div>
                <input 
                    type="checkbox"
                    name="isOnNetflix"
                    checked={ movie.isOnNetflix }
                    onChange={ (e) => inputChange(e) }
                     />
                     <label>Movie is on Netflix</label>
              </div>
            
            <button type="submit">Create Movie</button>
            {/* Return to all movies button */}
            <button onClick={(e) => navigate("/movies")}>Cancel</button>   
            </form>
        </div>
    )
}

export default CreateMovie;
