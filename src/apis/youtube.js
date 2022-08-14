import axios from 'axios'

const KEY = 'AIzaSyBf9grRBb_Wsxvl2Ux08w_wDNhVdK77UxU'
// const KEY = 'AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY

  }
}) 