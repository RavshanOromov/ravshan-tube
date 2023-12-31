import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import {colors } from '../../constants/colors'
import { Category, Videos } from '../'
import { ApiService } from '../../service/api.service'

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  console.log(videos);

  const selectedCategoryHandler = category => setSelectedCategory(category) 

  console.log(process.env.REACT_APP_PUBLIC_KEY);
   
  // useEffect(() => {
  //   ApiService.fetching('search').then(data => setVideos(data))
  // }, [])

  useEffect(() => {
  const getData = async () => {
    try {
      const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
    setVideos(data.items)
    } catch (error) { 
    console.log(error)
    }}

  getData()}, [selectedCategory])

  return (
    <Stack>
      <Category 
      selectedCategoryHandler={ selectedCategoryHandler} 
      selectedCategory={selectedCategory} /> 
      <Box p={2} sx={{height: '90vh' }}>
        <Container maxWidth={ '90%' }>
          <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
            {selectedCategory} <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
         

        </Container>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Main