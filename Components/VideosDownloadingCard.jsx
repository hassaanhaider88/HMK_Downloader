'use client'
import {useState} from 'react';
import { IoMdCodeDownload } from "react-icons/io";
import { getYotubeData , getFaceBookData } from '../app/lib/Request';

// https://youtu.be/djs6ur0B4qY?si=3US6BXgW--IpbNO2
// https://fb.watch/vLSrwThfSo/?mibextid=rS40aB7S9Ucbxw6v
// https://www.facebook.com/reel/578441624711196?mibextid=rS40aB7S9Ucbxw6v

const VideosDownloadingCard =({isYouTubeCard,setVideosData,setAudioData,setVideoName,FBVideoData,setFBVideoData})=>{
 const [isHovered, setIsHovered] = useState(false);
const [URL,setURL] = useState('')
const [IsError,setIsError] = useState(false);
const [IsLoading,setIsLoading] = useState(false)


const handleSearchVideo = async ()=>{
  if(isYouTubeCard){
    const regex = /^https:\/\/(www\.)?youtu\.be\//;
    const IsUrlValid = regex.test(URL); 
    if(!IsUrlValid){
     setIsError(true)
     setTimeout(()=>{
  setIsError(false)
     },2000)
    }else{
      setIsLoading(true)
let YTData = await getYotubeData(URL);
setVideoName(YTData.description)
setVideosData(YTData?.links?.splice(1,6));
setAudioData(YTData.links[0])
setIsLoading(false)
setURL('');
}
  }else{
      setIsLoading(true)
     let FBData = await getFaceBookData(URL)
     setFBVideoData(FBData.video)
     console.log(FBData)
     setIsLoading(false)

      console.log('Yout want to download faceBook');
  }
}


	return (
		<>
<div className="bg-white rounded-xl shadow-lg p-8 mb-12 transform hover:scale-105 transition-all duration-300">
            <div className="w-full mx-auto">
              <div className="flex gap-2 mb-8">
                <input 
                  type="url" 
                  value={URL}
                  required
                  onChange={(e)=>setURL(e.target.value)}
                  placeholder="Paste Video URL..." 
                  className={`flex-1 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C17C31]  transition-all duration-300 hover:shadow-inner`}
                />
                <button disabled={IsLoading} onClick={handleSearchVideo} className="bg-[#C17C31] hover:bg-[#A66829] text-white px-8 py-2 rounded-md transition-all duration-300 hover:shadow-md">
                  Search
                </button>
              </div>
              {
                IsError &&  <h1 className='text-red-600 font-semibold'>URL is Invalid Or Empty...</h1>
              }
              <div className="text-center py-8">
                <div 
                  className="inline-flex cursor-pointer items-center justify-center w-16 h-16 rounded-full bg-[#C17C31]/10 mb-4 transition-all duration-300 transform hover:scale-110"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                {
                  IsLoading ?  (<svg width="24" height="24" viewBox="0 0 100 100">
            <circle cx="20" cy="50" r="10" fill="#C17C31">
            <animate attributeName="cy" values="50;20;50" dur="0.6s" begin="0s" repeatCount="indefinite" />
           </circle>
            <circle cx="50" cy="50" r="10" fill="#C17C31">
          <animate attributeName="cy" values="50;20;50" dur="0.6s" begin="0.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="80" cy="50" r="10" fill="#C17C31">
          <animate attributeName="cy" values="50;20;50" dur="0.6s" begin="0.4s" repeatCount="indefinite" />
          </circle>
        </svg>) : (<IoMdCodeDownload size={'50px'} className='font-bold text-[40px] text-[#C17C31]'/>)
                }
                </div>
                <h3 className="text-xl text-gray-800 font-semibold mb-2 animate-fade-in-up">
                  Copy video url & paste here.
                </h3>
                <p className="text-gray-500 text-sm animate-fade-in-up">
                  make sure url is valid.
                </p>
              </div>
            </div>
          </div>
</>
		)
}

export default VideosDownloadingCard;