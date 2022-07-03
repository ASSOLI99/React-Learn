import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function Movie() {

const {Movie_id} =  useParams();
const [movie ,SetMovie] = useState({});

useEffect(()=>{

    axios(
        `https://api.themoviedb.org/3/movie/${Movie_id}?api_key=aa4bd1bce4554a2e53b3fc7f8136422c`
    )
        .then((res) => SetMovie(res.data));
  
     
}, [Movie_id]);



  return (
    <div className="row">
        
            <div   className="card col-sm-12 " style={{ width: '18rem', margin: "20px" }}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview}</p>
                   
                </div>
            </div>
        
      
    </div>
  
)}

export default Movie