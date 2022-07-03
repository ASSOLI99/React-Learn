import React, { useState, useEffect } from "react";

function Home() {
    const [movie, SetMovie] = useState([]);

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=aa4bd1bce4554a2e53b3fc7f8136422c&language=en-US&page"
        )
            .then((res) => res.json())
            .then((data) => {
                SetMovie(data.results);
                console.log(data.results);
            });
    }, []);

    return (<div className="row">
        {movie.map((movie) =>
            <div  key={movie.id} className="card col-sm-12 " style={{ width: '18rem', margin: "20px" }}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href={movie.id} className="btn btn-primary"> Go somewhere</a>
                </div>
            </div>
        )}
      
    </div>
    )
}

export default Home;
