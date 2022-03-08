import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AnimeCollection.css'



const AnimeCollection = () => {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        fetchAnime();
    }, []);

    const fetchAnime = () => {
        axios.get('https://ghibliapi.herokuapp.com/films')
            .then((res) => {
                console.log(res);
                setAnimes(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <h1>
                Anime Collection
            </h1>
            <div className="anime-container">
                {animes.map((anime) => (
                    <div className="anime-card"
                        key={anime.id}>
                        <table id="anime">
                            <tbody>
                                <tr>
                                    <th><img src={anime.image} /></th>
                                </tr>
                                <tr>
                                    <td><h4>{anime.title}</h4></td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to={`/anime/${anime.id}`}>Get more info</Link>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default AnimeCollection