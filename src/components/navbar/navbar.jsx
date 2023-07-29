import { Box, Stack } from '@mui/material'
import { logo } from '../../constants'
import { colors } from '../../constants/colors'
import { Searchbar } from '../'
import { Link } from 'react-router-dom'
import React from 'react'

import './navbar.css'

const Navbar = () => {
  return (
    <Stack direction={'row'} alignItems={'Center'} justifyContent={'space-between'}
    p={2} sx={{position: 'sticky', top: 0, zIndex: 999, background: colors.primary }}>
        <Link to={'/'}>
          <img src={logo} alt='logo' height={30} />
        </Link>
          <Searchbar /> 
        <Box />
         
    </Stack>
  )
}

export default Navbar