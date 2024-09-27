import React, { useContext, useEffect } from 'react'
import { infiniteContext } from '../../Context/InfiniteScrollContext/InfiniteContext';
import { Box, Flex, Grid, Heading, Center, Spinner } from '@chakra-ui/react';
import TvShowCard from './TvShowCard';

const TvShow = () => {
    const { infiniteTvShows, getInfiniteTvShows, page, setPage, setInfiniteTvShows, loading } = useContext(infiniteContext);

    const increasePageNumber = () => {
        if(window.scrollY + window.innerHeight >=  document.body.offsetHeight - 1000 ){
            setPage((prev)=>prev+1)
        }
    } 
    
    useEffect(()=>{
        async function fetchTvShows(page) {
            const tvshows =await getInfiniteTvShows(page);
            setInfiniteTvShows((prev)=>{
                return [...prev,  ...tvshows]
            });
        }
        fetchTvShows(page)
    },[page])
    
    useEffect(()=>{
        window.addEventListener('scroll',increasePageNumber);
        return () => {
            window.removeEventListener('scroll',increasePageNumber);
        }
    },[ infiniteTvShows ])

    console.log("infinateMovies in comp",infiniteTvShows);

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
                    <Heading fontWeight={500} fontSize='2xl' color='white'>Explore TV Shows</Heading>
                </Box>
                {/* <TabSwitch tabs={tabs}/> */}
            </Flex>
            <Box>
                <Grid templateColumns='repeat(5,1fr)' gap={5}>
                    {infiniteTvShows && infiniteTvShows.map((tvshow, index) => (
                        <TvShowCard key={index} tvshow={tvshow} />
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default TvShow