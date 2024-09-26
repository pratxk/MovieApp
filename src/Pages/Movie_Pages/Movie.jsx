import React, { useContext, useEffect } from 'react'
import { infiniteContext } from '../../Context/InfiniteScrollContext/InfiniteContext';
import MovieCard from './MovieCard';
import { Box, Flex, Grid, Heading } from '@chakra-ui/react';

const Movie = () => {
    const { infiniteMovies, getInfiniteMovies } = useContext(infiniteContext);
    useEffect(() => {
        getInfiniteMovies();
        console.log(infiniteContext)
    }, [])
    return (
        <>
            <Box>
                <Flex justify='space-between' mb={6} alignItems='center' textAlign='center'>
                    <Box>
                        <Heading fontWeight={500} fontSize='2xl' color='white'>Explore Movies</Heading>
                    </Box>
                    {/* <TabSwitch tabs={tabs}/> */}
                </Flex>
                <Box>
                    <Grid templateColumns='repeat(5,1fr)'>
                        {
                            infiniteMovies.map((movie, index) => {
                                <MovieCard key={index} movie={movie} />
                            })
                        }
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Movie