import { IoMdCodeDownload } from "react-icons/io";

const HMK_Logo =()=>{
	return (
		<div  className='InnerShadow cursor-pointer hover:scale-95 duration-300 flex items-center rounded-[30px] p-2 justify-center gap-3 w-fit'>
          	<div>
          		<IoMdCodeDownload size={'50px'} className='font-bold text-[40px] text-[#C17C31]'/>
          	</div>
          	<div style={{marginLeft: "4px"}}>
          	<h1 style={{marginBottom : '-10px',fontSize: '20px',fontWeight: '700'}}>HMK</h1>		
          	<span>Downloader</span>		
          	</div>		

		</div>
		)
}

export default HMK_Logo;