import React, { useContext, useEffect } from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react';
import Slider from '../Slider';
import { topRatedContext } from '../../Context/TopRatedContext/TopRatedContext';
import ToggleSwitch from '../TabsSwitch/ToggleSwitch';

const TopRated = () => {
    const { topRatedMovies, error, getTopRatedMovies } = useContext(topRatedContext);
    useEffect(() => {
        getTopRatedMovies();
        console.log(topRatedMovies)
    }, [])
    return (
        <>
            <Box>
                <Flex  mb={6} justifyContent='space-between'  alignItems='center' textAlign='center'>
                    <Box>
                        <Heading fontWeight={500} fontSize='2xl' color='white'>Top Rated</Heading>
                    </Box>
                    <ToggleSwitch/>
                </Flex>
                <Box>
                    <Slider type={topRatedMovies} />
                </Box>
            </Box>

        </>
    )
}
export default TopRated
