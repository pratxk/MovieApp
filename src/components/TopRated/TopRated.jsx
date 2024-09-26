import React, { useContext, useEffect } from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react';
import Slider from '../Slider';
import { topRatedContext } from '../../Context/TopRatedContext/TopRatedContext';

const TopRated = () => {
    const { topRatedMovies, error, getTopRatedMovies } = useContext(topRatedContext);
    useEffect(() => {
        getTopRatedMovies();
        console.log(topRatedMovies)
    }, [])
    return (
        <>
            <Box>
                <Flex justify='space-between'>
                    <Heading ml='3px' mb={4} color='white'>Top Rated</Heading>
                </Flex>
                <Box>
                    <Slider type={topRatedMovies} />
                </Box>
            </Box>

        </>
    )
}
export default TopRated
