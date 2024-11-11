'use client';

import React, { useState } from 'react';
import Navbar from '../Components/NavBar';
import VideosDownloadingCard from '../Components/VideosDownloadingCard';
import VideoCard from '../Components/VideoCard'
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import HMK_Logo from '../Components/Hmk_Logo'
import AudioComponent from '../Components/AudioComponent'
import ShowDownlaodingUI from '../Components/ShowDownloadingNotify';
import FBVideoCard from '../Components/F_BVideo';

export default function Component() {
  const [isYouTubeCard, setIsYouTubeCard] = useState(true);
  const [VideosData, setVideosData] = useState([]);
  const [AudioData, setAudioData] = useState(null);
  const [VideoName,setVideoName] = useState('')
  const [IsShowDownloading,setIsShowDownloading] = useState(false)
  const [FBVideoData , setFBVideoData] =  useState(null)
const handleToggleYoutubeAndFaceBook =()=>{
  setIsYouTubeCard(!isYouTubeCard)
}

console.log(VideosData,'in page');
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 animate-gradient-x">
        {/* Navigation */}
        <Navbar />
        {/* show Downloading UI div */ }
        <div onClick={()=>setIsShowDownloading(!IsShowDownloading)} style={{zIndex :100}} className={`fixed ${IsShowDownloading ? 'top-5' : "-top-[100%]"} z-90 cursor-pointer duration-700 left-1/2 -translate-x-1/2 py-2 px-4 text-white font-bold bg-[#C17C31] rounded-3xl shadow-inner`}>
          <ShowDownlaodingUI  IsShowDownloading={IsShowDownloading} setIsShowDownloading={setIsShowDownloading}/>
        </div>
        {/* FaceBook and Youtube toggle Here */}
        <div
          className='py-2 flex items-center cursor-pointer px-3 w-fit absolute left-2 '>
          <FaYoutube className='inline text-4xl text-[#C17C31] mr-2 mb-[2px]' />
          <div className="ToggleContainer">
            <input onChange={handleToggleYoutubeAndFaceBook} type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="label"> </label>
          </div>
          <FaFacebook className=' text-4xl text-[#C17C31] inline ml-2 mb-1' />
        </div>

        {/* Main Content */}
        <main className="container mx-auto md:px-40 sm:px-20 px-30 py-12">
          <div className="text-center max-w-full mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-down">
              Download videos for <span className='text-semibold text-[#C17C31]'>
                {isYouTubeCard ? ' YouTube' : " FaceBook"}</span>
              <span>{isYouTubeCard ? <FaYoutube className='inline text-red-600 ml-2 mb-[2px]' /> : <FaFacebook className='text-blue-500 inline ml-2 mb-1' />}</span> </h1>
            <p className="text-gray-600 mb-12 animate-fade-in-up">
              You can download online <span className='text-semibold text-[#C17C31]'>
                {isYouTubeCard ? ' vidoes' : " reels"}</span>, convert online <span className='text-semibold text-[#C17C31]'>
                {isYouTubeCard ? ' videos' : " reels"}</span> to mp3 for free.
            </p>

            {/* Download Form */}
            <VideosDownloadingCard
              isYouTubeCard={isYouTubeCard}
              setVideosData={setVideosData}
              setAudioData={setAudioData}
              setVideoName={setVideoName}
              FBVideoData={FBVideoData}
              setFBVideoData={setFBVideoData}
            />



{/* Youtube video Showing here  */}

            {VideosData?.length === 0 ? null : (
              <>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Videos</h2>
                <div className="grid w-full  grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {VideosData.map((video, index) =>
                    <VideoCard 
                    videoInfo={video} 
                    VideoName={VideoName}
                     key={index} 
                     IsShowDownloading={IsShowDownloading}
                     setIsShowDownloading={setIsShowDownloading}

                     />
                  )}
                </div>
              </>
            )}

{/* FaceBook videos showing therer */}

{FBVideoData === null  ? null : (
              <>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Videos</h2>
                <div className="grid w-full  grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                 
                 <FBVideoCard
                  IsShowDownloading={IsShowDownloading}
                  setIsShowDownloading={setIsShowDownloading}
                 videoInfo={{link : FBVideoData.hd_video_url,quality : "1080 HD"} }/>
                 <FBVideoCard
                  IsShowDownloading={IsShowDownloading}
                  setIsShowDownloading={setIsShowDownloading}
                 videoInfo={{link : FBVideoData.sd_video_url,quality : "780 SD"} }/>
                </div>
              </>
            )}


            {AudioData !== null && AudioData !== undefined && (
              <AudioComponent  
              IsShowDownloading={IsShowDownloading}
              setIsShowDownloading={setIsShowDownloading}
              VideoName={VideoName} 
              AudioData={AudioData}/>
            )}



            {/* Powered By */}
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex  items-center justify-center gap-2 text-gray-600 mt-12">
              <span>Powered By</span>
              <HMK_Logo />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}