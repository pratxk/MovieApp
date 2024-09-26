import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { trendingContext } from '../../Context/TrendingContext'
import Slider from '../Slider';
import ToggleSwitch from '../TabsSwitch/ToggleSwitch';
// import TabSwitch from '../TabsSwitch/TabSwitch';

const Trending = () => {
    const { trendingMovies, getTrendingMovies } = useContext(trendingContext);
    useEffect(() => {
        getTrendingMovies();
        console.log(trendingMovies)
    }, [])
    return (
        <>


            <Box>
                <Flex justify='space-between'>
                    <Heading ml='3px' mb={4} color='white'>Trending</Heading>
                    {/* <TabSwitch tabs={tabs}/> */}
                    <ToggleSwitch/>
                </Flex>
                <Box>
                    <Slider type={trendingMovies} />
                </Box>
            </Box>

        </>
    )
}

export default Trending
