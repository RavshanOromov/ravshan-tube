import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { colors } from '../../constants/colors'
import { ApiService } from '../../service/api.service'

const Search = () => {
  const [videos, setVideos] = useState([])
  const {id} = useParams()
  console.log(id);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
        setVideos(data.items)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [id])

  return (
    <Box p={2} sx={{height: '90VH'}}>
      <Container maxWidth={'90%'}>
        <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
          Search results for <span style={{color: colors.secondary}}>{id}</span> videos
        </Typography>
      </Container>

    </Box>
  )
}

export default Search