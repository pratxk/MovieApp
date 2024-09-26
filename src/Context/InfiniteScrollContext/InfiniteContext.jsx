import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const infiniteContext = createContext();

export const InfiniteContextProvider = ({children}) =>{
    const [infiniteMovies, setInfiniteMovies] = useState([]);
    const [error, setError] = useState(null);

    const getInfiniteMovies = async () =>{
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTQ5YzJkMjc0ZGMxMTljZjgzOWE2MzJlZTY3Mzg4OSIsIm5iZiI6MTcyNzMyMTA3Ni43NzgyMiwic3ViIjoiNjZmNGMxYmQ1ZTM1NGM1MDEyNzNkNzIyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.URRGeEEIliDxWIGrNW3Sxq-ranymEiZ5IlDfP1ssHvg'
        const config = {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const res =  await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', config);
            const movie = res.data;
            console.log('Movie-infinite',movie);
            setInfiniteMovies(movie.results);
            setTimeout(()=>{
                console.log(infiniteMovies)
            },5000);
        } catch (error) {
            setError(error.message);
        }
    }

    // useEffect(() => {
    //     getPopularMovies();
    // }, []);

    return <infiniteContext.Provider value={{infiniteMovies, error, getInfiniteMovies}}>
        {children}
    </infiniteContext.Provider>
}