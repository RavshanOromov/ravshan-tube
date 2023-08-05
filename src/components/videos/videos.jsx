// import { Stack, Box} from '@mui/material'
// import { VideoCard, ChannelCard, Loader } from '../'
// import React from 'react'

// const Videos = ({ videos }) => {
//   if (!videos.length) {
//     return <Loader />
//   }
//   return (
//    <Stack
//      width={"100%"}
//      direction={'row'}
//      flexWrap={'wrap'}
//      justifyContent={'start'}
//      alignItems={'center'}
//      gap={2}
//    >
//     {videos.map((item, idx) => (
//       <Box key={idx}>
//          {item.id.videoId && <VideoCard video={item} />}
//          {item.id.channelId && <ChannelCard video={item} />}

//       </Box>
//     ))}
//    </Stack>

// )
// }

// export default Videos


import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from '..'

const Videos = ({ videos }) => {
	// if (!videos.length) return <Loader />
console.log(videos);
	return (
		<Stack
			width={'100%'}
			direction={'row'}
			flexWrap='wrap'
			justifyContent='start'
			alignItems='start'
			gap={2}
		>
			{videos.map((item) => (
				<Box key={item.id}>
					{item.id.videoId && <VideoCard video={item} />}
					{item.id.channelId && <ChannelCard video={item} />}
				</Box>
			))}
		</Stack>
	)
}

export default Videos