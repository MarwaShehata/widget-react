import {useState,useEffect} from 'react';
import axiosConfig from './../apis/youtube'
const useVideos =(defaultSearchTerm)=>{
  const [videos,setVideos] =useState([])
  useEffect(()=>{
    onSearchSubmit(defaultSearchTerm)
  },[defaultSearchTerm])
  const onSearchSubmit= async(searchTerm)=>{
    const response = await axiosConfig.get("search",{
      params:{
        q:searchTerm
      }
    })
    setVideos(response.data.items)
    
      }

      return [videos,onSearchSubmit]
}
export default useVideos