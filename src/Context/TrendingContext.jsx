import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const trendingContext = createContext();

export const TrendingContextProvider = ({children}) =>{
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingWeeklyMovies, setTrendingWeeklyMovies] = useState([]);
    const [error, setError] = useState(null);
    const [state, setState] = useState(true);

    const getTrendingWeeklyMovies = async () =>{
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTQ5YzJkMjc0ZGMxMTljZjgzOWE2MzJlZTY3Mzg4OSIsIm5iZiI6MTcyNzMyMTA3Ni43NzgyMiwic3ViIjoiNjZmNGMxYmQ1ZTM1NGM1MDEyNzNkNzIyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.URRGeEEIliDxWIGrNW3Sxq-ranymEiZ5IlDfP1ssHvg'
        const config = {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const res =  await axios.get('https://api.themoviedb.org/3/trending/movie/week?language=en-US', config);
            const movie = res.data;
            console.log('Movie',movie);
            setTrendingWeeklyMovies(movie.results);
            setTimeout(()=>{
                console.log(trendingWeeklyMovies)
            },5000);
        } catch (error) {
            setError(error.message);
        }
    }
    const getTrendingMovies = async () =>{
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTQ5YzJkMjc0ZGMxMTljZjgzOWE2MzJlZTY3Mzg4OSIsIm5iZiI6MTcyNzMyMTA3Ni43NzgyMiwic3ViIjoiNjZmNGMxYmQ1ZTM1NGM1MDEyNzNkNzIyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.URRGeEEIliDxWIGrNW3Sxq-ranymEiZ5IlDfP1ssHvg'
        const config = {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            const res =  await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', config);
            const movie = res.data;
            console.log('Movie',movie);
            setTrendingMovies(movie.results);
            setTimeout(()=>{
                console.log(trendingMovies)
            },5000);
        } catch (error) {
            setError(error.message);
        }
    }

    // useEffect(() => {
    //     getPopularMovies();
    // }, []);

    return <trendingContext.Provider value={{trendingMovies,trendingWeeklyMovies,state, setState, getTrendingWeeklyMovies, error, getTrendingMovies}}>
        {children}
    </trendingContext.Provider>
}