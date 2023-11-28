import axios from "axios";

export const backend_endpoint='https://qtify-backend-labs.crio.do/'
 
export const  fetchTopAlbums=async()=>{
    try {
        const res =await axios.get(`${backend_endpoint}albums/top`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export const  fetchNewAlbums=async()=>{
    try {
        const res =await axios.get(`${backend_endpoint}albums/new`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export const  fetchNewSongs=async()=>{
    try {
        const res =await axios.get(`${backend_endpoint}songs`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}