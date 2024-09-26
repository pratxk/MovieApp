import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <Box as='nav' display='flex' justifyContent='space-between' px='13em' h='60px' alignItems='center' bg='#010d21' >
        <Box  display='flex' alignItems='center'>
            <Image w='100%' h='60px'bg='#010d21' src='https://movix-app-murex.vercel.app/assets/movix-logo-HTlvmwAF.svg'/>
        </Box>
        <Box display='flex'  bg='#010d21' justifyContent='center' color='white'  gap='2em' alignItems='center'>
            <Box bg='#010d21'>
                <Link bg='#010d21' to='/'><Text bg='#010d21' fontWeight='bold'>Home</Text></Link>
            </Box>
            <Box bg='#010d21'>
                <Link bg='#010d21' to='/' ><Text bg='#010d21' fontWeight='bold'>TV Shows</Text></Link>
            </Box>
        </Box>
      </Box>
    </>
  )
}

export default Navbar
