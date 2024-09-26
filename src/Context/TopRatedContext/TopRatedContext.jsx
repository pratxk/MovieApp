import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const topRatedContext = createContext();

export const TopRatedContextProvider = ({children}) =>{
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [error, setError] = useState(null);

    const getTopRatedMovies = async () =>{
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTQ5YzJkMjc0ZGMxMTljZjgzOWE2MzJlZTY3Mzg4OSIsIm5iZiI6MTcyNzMyMTA3Ni43NzgyMiwic3ViIjoiNjZmNGMxYmQ1ZTM1NGM1MDEyNzNkNzIyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.URRGeEEIliDxWIGrNW3Sxq-ranymEiZ5IlDfP1ssHvg'
        const config = {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const res =  await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', config);
            const movie = res.data;
            console.log('Movie',movie);
            setTopRatedMovies(movie.results);
            setTimeout(()=>{
                console.log(topRatedMovies)
            },5000);
        } catch (error) {
            setError(error.message);
        }
    }

    // useEffect(() => {
    //     getPopularMovies();
    // }, []);

    return <topRatedContext.Provider value={{topRatedMovies, error, getTopRatedMovies}}>
        {children}
    </topRatedContext.Provider>
}