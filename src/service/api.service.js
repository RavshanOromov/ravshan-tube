import axios from 'axios'
const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'e5026cb618mshce47c1cd4c43dafp1c7522jsn713cfc5d8aad',
        // 'X-RapidAPI-Key': process.env.REACT_APP_PUBLIC_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      },
  }

// async await
// promise
export const ApiService = {
async fetching(url) {
    const response = await axios.get(`${BASE_URI}/${url}`, options)
    return response.data
},
}