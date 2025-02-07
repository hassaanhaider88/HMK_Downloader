'use client';
import { IoCodeDownloadOutline } from "react-icons/io5";


const VideoCard = ({videoInfo,VideoName,setIsShowDownloading,IsShowDownloading}) =>{
console.log(videoInfo);
  const handleVideoDownload = () =>{
    setIsShowDownloading(!IsShowDownloading)
    setTimeout(()=>{
      setIsShowDownloading(!IsShowDownloading)
       },2000)
  }

return (
<div  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
                <video controls 
controls src={videoInfo.link} alt={videoInfo.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className='text-lg font-semibold' >{VideoName}</h3>
                    <span className="text-sm text-gray-600">{videoInfo.qualityLabel} Quality</span>
                    <button onClick={handleVideoDownload} className="bg-[#C17C31] hover:bg-[#A66829] text-white px-3 py-1 rounded text-sm transition-all duration-300 hover:shadow-md">
                    <IoCodeDownloadOutline  size={"20px"}/>
                    </button>
                  </div>
                </div>
  </div>
	)
}
export default VideoCard;