import { NavLink, Outlet } from "react-router-dom";
function Landing(){
    return(<>
        
          <div className="flex flex-col h-full  w-[100%] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRQrmy9pwdNkcUcHaEz_hlukVSdwgdgSilQ&s')] bg-cover">
               {/* nav */}
               <div className="sticky top-0 h-[5rem] py-8 flex justify-between px-8 items-center bg-transparent">
                     <div>
                          <NavLink to="/">Logo</NavLink>
                     </div>
                     <div className="flex gap-5"> 
                          <NavLink to='/general/dashboard' className='font-bold text-zinc-900'>Home</NavLink>
                          <NavLink to='/about' className='font-bold text-zinc-900'>About Us</NavLink>
                          <NavLink to='/help' className='font-bold text-zinc-900'>Help</NavLink>
                     </div>
                     <div>
                          <NavLink to="/general" className="bg-zinc-900 text-white font-semibold px-3 py-2 rounded-lg">DONATE</NavLink>
                     </div>
               </div>

               {/* main */}

                <Outlet/>
               
          </div>
    
    </>)
}

export default Landing;