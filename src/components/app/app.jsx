import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material' 
import { Main, Channel } from '../'
import './app.css'


const App = () => {
  return (
 <Box>
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/channel' element={<Channel />} />
    </Routes>
 </Box>
  )
}

export default App