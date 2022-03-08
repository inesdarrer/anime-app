import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Anime.css'

const Anime = ({ match }) => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchAnime();
    }, []);
    const fetchAnime = () => {
        axios.get(`https://ghibliapi.herokuapp.com/films/?id=${id}`)
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
            {data.map((movie) => {
                return (
                    <div className='movie-container' key={movie.id}>
                        <div>
                            <img className='movie-image' src={movie.image} alt='' />
                        </div>
                        <div>
                            <h1 className='title'>{movie.title}</h1>
                            <h2>{movie.original_title}</h2>
                            <p>{movie.description}</p>
                            <p>
                                <strong>Release date:</strong> {movie.release_date}
                            </p>
                            <p>
                                <strong>Producer:</strong> {movie.producer}
                            </p>
                        </div>
                    </div>
                );
            })}
            <div className='back'>
                <Link to='/'>Back to Anime Collection</Link>
            </div>
        </div>
    );
};

export default Anime