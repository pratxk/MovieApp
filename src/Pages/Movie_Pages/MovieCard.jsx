import { Box } from '@chakra-ui/react'
import React from 'react'

function MovieCard({movie}) {
    return (
        <>
            <Box>
                <Link to={''}>
                    <Square m="auto" position='relative'>
                        <Image
                            src={`${baseUrl + movie.poster_path}`}
                            alt={i.name}
                            boxSize={{ base: "100px" }}
                            borderRadius='3%'
                            w="100%"
                            h='300px'
                        />
                        <Flex pos='absolute' bottom='15px' bg='transparent' right='20px' gap='5px'>
                            {movie.genre_ids.slice(0, 2).map((ele) => {
                                const genreName = genres[ele];
                                return <Badge fontWeight='bold' fontSize={'10px'} key={ele} bg='hotpink' color='white'>{genreName}</Badge>;
                            })}
                        </Flex>
                        <Box pos='absolute' bottom='-5' left='0' borderRadius='100%'>
                            <CircleProgress value={movie.vote_average} />
                        </Box>
                    </Square>
                </Link>
                <VStack pl={1} mt={3} textAlign='left' align="left">

                    <Text
                        pt={5}
                        fontWeight="bold"
                        fontSize="16px"
                        color='white'
                    >
                        {movie.original_title}
                    </Text>
                    <Text
                        pb={5}
                        fontWeight="bold"
                        fontSize="13px"
                        color='white'
                    >
                        {movie.release_date}
                    </Text>
                </VStack>
            </Box>
        </>
    )
}

export default MovieCard