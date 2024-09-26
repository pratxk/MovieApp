import { Box, Button, Center, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import Trending from '../components/Trending/Trending'
import { TrendingContextProvider } from '../Context/TrendingContext'
import { PopularContextProvider } from '../Context/PopularContext/PopularContext'
import Popular from '../components/Popular/Popular'
import { TopRatedContextProvider } from '../Context/TopRatedContext/TopRatedContext'
import TopRated from '../components/TopRated/TopRated'

const Home = () => {
    return (
        <>
            <Box px='12em'>
                <Center m='auto' color='white' p='0' display='flex' flexDir='column' h='600px'>
                    <Box display='flex' flexDir='column' justifyContent='center' alignItems='center'>
                        <Box>
                            <Heading fontSize='6em'>
                                Welcome.
                            </Heading>
                        </Box>
                        <Box>
                            <Heading fontSize='1em'>
                                Millions of movies, TV shows and people to discover. Explore now.
                            </Heading>
                        </Box>
                    </Box>
                    <Box display='flex' mt={6} borderRadius='60px 0px 0px 60px' w='45em' >
                        <Input borderRadius='60px 0px 0px 60px' bg='white' h='67px' color='black' placeholder='Enter Your movie name' />
                        <Button
                            color='white'
                            h='67px'
                            borderRadius='0px 60px 60px 0px'
                            bg={`linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%)`}>
                            Search
                        </Button>
                    </Box>
                </Center >
                <br />
                <Box>
                    <TrendingContextProvider>
                        <Trending />
                    </TrendingContextProvider>
                </Box>
                <br />
                <br />
                <Box>
                    <PopularContextProvider>
                        <Popular/>
                    </PopularContextProvider>
                </Box>
                <br />
                <br />
                <Box>
                    <TopRatedContextProvider>
                        <TopRated/>
                    </TopRatedContextProvider>
                </Box>
                
            </Box >
        </>
    )
}

export default Home
