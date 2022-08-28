import axios from 'axios'
const KEY = 'AIzaSyA4jl29WdLDLkaSHQ1ls0pJ8JMtrAO6k6Y'
export default axios.create({
  baseURL:" https://www.googleapis.com/youtube/v3/",
  params:{
    part:"snippet",
    maxResaults:5,
    key:KEY,
    type:"video"
  }
})