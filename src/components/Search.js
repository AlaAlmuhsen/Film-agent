import { useEffect, useState } from "react";
import landingTwo from '../images/landingOne.png'
import { Link } from "react-router-dom";

function Search () {

const [records , setRecords] = useState([])
const [filteredList , setFilteredList] = useState(records)
    const [flag , setFlag] = useState(true)
    useEffect(() =>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7a7ae610fbc037636298df0b94208975&language=en-US&page=1')
        .then(response => response.json())
        .then(data => {
            let movieData = data.results.map((movie) => {
                return {
                    title : movie.title,
                    id : movie.id,
                    backdrop_path : "https://image.tmdb.org/t/p/original"+movie.backdrop_path
                } 
            })
            setRecords(movieData);
        })
        .catch(err => console.log(err))
    })
    function onInput (e){
        let query = e.target.value;
        setFlag(e.target.value.length == 0 ? false : true)
        let updatedList = records.filter((item)=>{
            return item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        })
        setFilteredList(updatedList)
        // console.log(filteredList)
    }  

    return (
        <div className="search-box">
                                <input type="seacrh" onChange={(e) => onInput(e)} className='input-search' placeholder='Search For Movie' maxLength={30}/>
                                {flag && <div className='search-results'>
                                    {filteredList.map((movie) => {
                                        return <Link to ={"/Movie/"+movie.id} key ={movie.id}>
                                            <div >
                                                {movie.title}
                                                <img src={movie.backdrop_path}  />
                                            </div>
                                        </Link>
                                    })}
                                </div>}
                            </div>
    )


}

export default Search;


/*
<div className='search-results'>
                                    {records.map((movie) => {
                                        return <div>{movie.title}<img src={landingTwo}  /></div>
                                    })}
                                </div>

*/ 