import HMK_Logo from './Hmk_Logo';
import {
	SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser
}  from '@clerk/nextjs'
const Navbar =()=>{

const { user } = useUser(); 

	return (
		<nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
             <HMK_Logo />
              <div className="hidden md:flex items-center space-x-6">
                <button className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Buy Views</button>
                <button className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Buy Subscribers</button>
                <button className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Buy Likes</button>
                <button className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Support</button>
              </div>
            </div>
     
        <SignedOut>
              <button className="bg-[#C17C31] hover:bg-[#A66829] hover:scale-105 text-white px-4 py-2 rounded transition-all duration-300 hover:shadow-md">
                   <SignInButton />
              </button>
       </SignedOut>

    <SignedIn>
      <div style={{flexDirection : "column", gap:"0px"}} className="flex items-center mr-5">
        <div> 
           <UserButton className="h-full w-full" />
        </div>
          <span className="text-gray-700 font-semibold">
            {user?.firstName || 'User'}
          </span>
        </div>
    </SignedIn>


          </div>
        </div>
      </nav>
	)
}

export default Navbar;