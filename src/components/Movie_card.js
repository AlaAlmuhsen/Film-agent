import Button from '../components/Button';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';



function Movie_card(){

    const {id} = useParams();
    const URL = 'https://api.themoviedb.org/3/movie/'+id+'?language=en-US&api_key=7a7ae610fbc037636298df0b94208975';
    const [movieDetails , setMovieDetails] = useState({});
    useEffect(() =>{
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            let genresJoin = data.genres.map((genere) => (genere.name)).join(", ")
            setMovieDetails({
                title: data.title,
                backdrop_img: "https://image.tmdb.org/t/p/original"+data.backdrop_path,
                postar_img: "https://image.tmdb.org/t/p/original"+data.poster_path,
                vote_average: data.vote_average.toFixed(1),
                genres: genresJoin,
                runtime:data.runtime,
                release_date:data.release_date,
                overview:data.overview
                
            });
        })
        .catch(err => console.log(err))
    })
    //

    return (
        <div className='container movie_card' >
            <div className="back-link">
                <Link to="/">
                <i className="fa-solid fa-arrow-left-long"></i> Back
                </Link>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <img src={movieDetails.postar_img} alt="" width="100%"/>
                </div>
                <div className="col-md-8">
                    <div className="movie-desc">
                        <h1>{movieDetails.title}</h1>
                        <div className="text">
                            <p className='movie-quality'>Movie</p>
                            <p>{movieDetails.genres}</p>
                            <p><i className="fa-regular fa-clock icon-style"></i> {movieDetails.runtime} minutes</p>
                            <p><i className="fa-regular fa-calendar-days icon-style"></i> {(movieDetails.release_date)}</p>
                        </div>
                        <div className="call-to-action">
                            <i className="fa-solid fa-share-nodes icon-share"></i>
                            <div className="rate">
                                <p>Rate The Show</p>
                                <p className='rate-value'>
                                    <i className="fa-sharp fa-solid fa-star star"></i>
                                    {(movieDetails.vote_average)}
                                </p>
                            </div>
                            <Button>
                                <i className="fa-solid fa-play"></i> play Now
                            </Button>
                        </div>
                        <p>{movieDetails.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// https://image.tmdb.org/t/p/original/"
export default Movie_card;
