'use client';
import {useRef, useState} from 'react'
import { GiMusicSpell } from "react-icons/gi";
import { TbPlayerTrackPrev } from "react-icons/tb";
import { TbPlayerTrackNext } from "react-icons/tb";
import { FiPlay } from "react-icons/fi";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { IoCodeDownloadOutline } from "react-icons/io5";

const AudioComponent = ({AudioData,setIsShowDownloading,IsShowDownloading}) =>{
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCard = { title: "Relaxing nature sounds", listens: "4.5M" };
  const audioRef = useRef(new Audio(AudioData.link));

  const handleAudioDownload = () =>{
    setIsShowDownloading(!IsShowDownloading);
    setTimeout(()=>{
   setIsShowDownloading(!IsShowDownloading)
    },2000)
  }


  const handleAudioPlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause the audio
      setIsPlaying(false);
    } else {
      audioRef.current.play(); // Play the audio
      setIsPlaying(true);
    }
  };
audioRef.current.onended = () => setIsPlaying(false);
  console.log(AudioData)
  return(
<>
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Audio</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 max-w-md mx-auto">
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-40 flex items-center justify-center">
             <GiMusicSpell 
             className={`text-white ${isPlaying ? 'animate-pulse' : ''}`} 
             size={'60px'}
             />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{audioCard.title}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">{audioCard.listens} listens</span>
                <button onClick={handleAudioDownload} className="bg-[#C17C31] hover:bg-[#A66829] text-white px-3 py-1 rounded text-sm transition-all duration-300 hover:shadow-md">
                 <IoCodeDownloadOutline size={"20px"}/>
                </button>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <button className="text-gray-400 hover:text-gray-600 transition-colors duration-300" aria-label="Backward" disabled>
                  <TbPlayerTrackPrev size={'25px'}/>
                </button>
                <button 
                  className="text-[#C17C31] hover:text-[#A66829] transition-colors duration-300" 
                  aria-label={isPlaying ? "Pause" : "Play"}
                  onClick={handleAudioPlayPause}
                >
                  {isPlaying ? (
                      <TbPlayerPauseFilled size={'25px'}/>
                ) : (
                      <FiPlay size={'25px'}/>
                  )}
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors duration-300" aria-label="Forward" disabled>
                  <TbPlayerTrackNext size={'25px'}/>
                </button>
              </div>
            </div>
          </div>
      </div>
            <div className='w-full flex flex-col justify-center items-center mt-5 p-4'>
              <h1 className='text-lg font-semibold'>Downlaod Here</h1>
              <audio src={AudioData.link} controls></audio>
            </div>
</>
  )
}

export default AudioComponent;