import { useParams } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import { useEffect, useState } from 'react'
import { ApiService } from '../../service/api.service'
import { ChannelCard, Videos} from '../'


const Channel = () => {
  const [channelDetail, setChannelDetail ] = useState()
  const [videos, setVideos] = useState([])
  const { id } = useParams

  useEffect(() => {
    const getData = async () => {
      try {
        const dataCHannelDetail = await ApiService.fetching(`channels?part=snippet&id-${id}`)
        setChannelDetail(dataCHannelDetail.items[0])
        const dataVideo = await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
        setVideos(dataVideo.items)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [id])
  return (
    <Box>
      <Box>
        <Box width={'100%'} height={'300px'} zIndex={10} sx={{backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`, backgroundPosition: 'center', backgroundSize: 'cover', objectFit: 'cover', backgroundRepeat: 'no-repeat',}} />
        <ChannelCard video={channelDetail} marginTop={'-100px'}  />
      </Box>
      <Container maxWidth={'90%'}>
         <Videos video={videos} />
      </Container>

    </Box>
  )
}

export default Channel