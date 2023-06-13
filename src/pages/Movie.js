import { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Movie_card from "../components/Movie_card";

function Movie () {
    const {id} = useParams();
    if (id == undefined) {
        return (
            <h1>Movie Not Found</h1>
        )
    }
    else {
        return (
            <div className="movie-result">
                <Header />
                <Movie_card />
            </div>
            )
        }
    }
    
    export default Movie;
    // <Header />
    // // <h1>Movie {id}</h1>