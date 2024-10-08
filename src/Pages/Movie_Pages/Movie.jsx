import React, { useContext, useEffect } from 'react'
import { infiniteContext } from '../../Context/InfiniteScrollContext/InfiniteContext';
import MovieCard from './MovieCard';
import { Box, Flex, Grid, Heading, Center, Spinner } from '@chakra-ui/react';

const Movie = () => {
    const { infiniteMovies, getInfiniteMovies, page, setPage, setInfiniteMovies, loading } = useContext(infiniteContext);

    const increasePageNumber = () => {
        if(window.scrollY + window.innerHeight >=  document.body.offsetHeight - 1000 ){
            setPage((prev)=>prev+1)
        }
    } 
    
    useEffect(()=>{
        async function fetchMovies(page) {
            const movies =await getInfiniteMovies(page);
            setInfiniteMovies((prev)=>{
                return [...prev,  ...movies]
            });
        }
        fetchMovies(page)
    },[page])
    
    useEffect(()=>{
        window.addEventListener('scroll',increasePageNumber);
        return () => {
            window.removeEventListener('scroll',increasePageNumber);
        }
    },[ infiniteMovies ])

    console.log("infinateMovies in comp",infiniteMovies);

    if (loading) {
        return (
            <Center h="100vh">
                <Spinner size="xl" color="white" />
            </Center>
        );
    }

    return (
        <Box mt={4}>
            <Flex justify='space-between' mb={6} alignItems='center' textAlign='center'>
                <Box>
                    <Heading fontWeight={500} fontSize='2xl' color='white'>Explore Movies</Heading>
                </Box>
                {/* <TabSwitch tabs={tabs}/> */}
            </Flex>
            <Box>
                <Grid templateColumns='repeat(5,1fr)' gap={5}>
                    {infiniteMovies && infiniteMovies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default Movie