import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import Slider from '../Slider';
import { popularContext } from '../../Context/PopularContext/PopularContext';
// import TabSwitch from '../TabsSwitch/TabSwitch';

const Popular = () => {
    const { popularMovies, getPopularMovies } = useContext(popularContext);
    useEffect(() => {
        getPopularMovies();
        console.log(popularMovies)
    }, [])
    return (
        <>


            <Box>
                <Flex justify='space-between'>
                    <Heading ml='3px' mb={4} color='white'>What's Popular </Heading>
                    {/* <TabSwitch tabs={tabs}/> */}
                </Flex>
                <Box>
                    <Slider type={popularMovies} />
                </Box>
            </Box>

        </>
    )
}

export default Popular
