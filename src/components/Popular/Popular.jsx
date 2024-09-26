import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import Slider from '../Slider';
import { popularContext } from '../../Context/PopularContext/PopularContext';
import ToggleSwitch from '../TabsSwitch/ToggleSwitch';
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
                <Flex justify='space-between'  mb={6} alignItems='center' textAlign='center'>
                <Box>
                        <Heading fontWeight={500} fontSize='2xl' color='white'>What's Popular</Heading>
                    </Box>
                    <ToggleSwitch />
                </Flex>
                <Box>
                    <Slider type={popularMovies} />
                </Box>
            </Box>

        </>
    )
}

export default Popular
