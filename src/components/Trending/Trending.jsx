import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { trendingContext } from '../../Context/TrendingContext'
import Slider from '../Slider';
import ToggleSwitch from '../TabsSwitch/ToggleSwitch';
// import TabSwitch from '../TabsSwitch/TabSwitch';

const Trending = () => {
    const { trendingMovies, getTrendingMovies, state ,trendingWeeklyMovies, getTrendingWeeklyMovies } = useContext(trendingContext);

    useEffect(() => {
        getTrendingMovies();
        getTrendingWeeklyMovies();
        console.log(trendingMovies,trendingWeeklyMovies)
    }, []);

    return (
        <>


            <Box>
                <Flex justify='space-between' mb={6} alignItems='center' textAlign='center'>
                    <Box>
                        <Heading fontWeight={500} fontSize='2xl' color='white'>Trending</Heading>
                    </Box>
                    {/* <TabSwitch tabs={tabs}/> */}
                    <ToggleSwitch val1={'Day'} val2='Weekly' />
                </Flex>
                <Box>
                    <Slider type={trendingMovies} />
                </Box>
            </Box>

        </>
    )
}

export default Trending
