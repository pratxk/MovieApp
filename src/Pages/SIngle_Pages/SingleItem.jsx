import React from 'react'
import { Box, Flex, Image, Text, Heading, Button, Badge, VStack, HStack, Icon, Container } from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa'

const SingleItem = () => {
    return (
        <Container maxW="container.xl" py={8}>
            <Flex direction={{ base: 'column', md: 'row' }} bg="transparent" borderRadius="lg" overflow="hidden"
            h={{ base: 'auto', md: '600px' }}
            gap={4}
            alignItems='start'>
                <Box  h='500px'>
                    <Image 
                        src="https://image.tmdb.org/t/p/original/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg" 
                        alt="The Crow (2024)" 
                        w="100%" 
                        h='500px'
                        pt={2}
                        pr={2}
                        borderRadius='20px'
                    />
                </Box>
                <VStack  
                    align="start" 
                    pt={2}
                    spacing={5} 
                    flex="1"
                    h="100%"
                    overflowY="auto"
                    color="white"
                >
                    <Heading size="xl">The Crow (2024)</Heading>
                    <Text fontSize="md" fontStyle="italic" color="gray.400">True love never dies.</Text>
                    <HStack spacing={2} wrap="wrap">
                        <Badge colorScheme="pink" fontSize="0.7em" p={1}>Action</Badge>
                        <Badge colorScheme="purple" fontSize="0.7em" p={1}>Fantasy</Badge>
                        <Badge colorScheme="red" fontSize="0.7em" p={1}>Horror</Badge>
                    </HStack>
                    <HStack spacing={4}>
                        <Box bg="yellow.400" borderRadius="full" px={2} py={1}>
                            <Text fontSize="sm" fontWeight="bold" color="black">5.4</Text>
                        </Box>
                        <Button leftIcon={<Icon as={FaPlay} />} colorScheme="whiteAlpha" variant="outline" size="xs">
                            Watch Trailer
                        </Button>
                    </HStack>
                    <Box>
                        <Heading size="sm" mb={1}>Overview</Heading>
                        <Text fontSize="sm" color="gray.300">
                            Soulmates Eric and Shelly are brutally murdered when the demons of her dark past catch up
                            with them. Given the chance to save his true love by sacrificing himself, Eric sets out to seek
                            merciless revenge on their killers, traversing the worlds of the living and the dead to put the
                            wrong things right.
                        </Text>
                    </Box>
                    <Flex wrap="wrap" justify="space-between" w="100%">
                        <Box mb={2} mr={4}>
                            <Text fontSize="xs" fontWeight="bold" color="gray.400">Status:</Text>
                            <Text fontSize="sm">Released</Text>
                        </Box>
                        <Box mb={2} mr={4}>
                            <Text fontSize="xs" fontWeight="bold" color="gray.400">Release Date:</Text>
                            <Text fontSize="sm">Aug 21, 2024</Text>
                        </Box>
                        <Box mb={2}>
                            <Text fontSize="xs" fontWeight="bold" color="gray.400">Runtime:</Text>
                            <Text fontSize="sm">1h 51m</Text>
                        </Box>
                    </Flex>
                    <Box>
                        <Text fontSize="xs" fontWeight="bold" color="gray.400">Director:</Text>
                        <Text fontSize="sm">Rupert Sanders</Text>
                    </Box>
                    <Box>
                        <Text fontSize="xs" fontWeight="bold" color="gray.400">Writer:</Text>
                        <Text fontSize="sm">Zach Baylin, Will Schneider</Text>
                    </Box>
                </VStack>
            </Flex>
        </Container>
    )
}

export default SingleItem
