import { NavLink } from "react-router-dom";
import childimg from '../assets/child.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons';
function LandingMain(){
    return(<>
             

             <div className="flex gap-5 h-[100%] items-center justify-center">
                    <div className=" relative w-[45%] mt-[8rem] flex flex-col justify-center items-center gap-5 pt-10">
                      <p className="font-bold">TOGATHER, WE CAN HELP CHILDREN</p>
                      <div className=" w-[100%] text-6xl font-bold absolute bottom-[15rem] left-[5rem] z-[100]">
                        <p className="text-[#ea4633] w-[100%]">ONE DONATION</p>
                        <p >AT A TIME</p>
                      </div>
                      <p className="text-center font-semibold ms-5">Your small act of kindness can create a world of opportunities. Donate today and help shape a brighter future for children in need.</p> 
                      <NavLink to="/general" className="bg-zinc-900 text-white font-semibold px-3 py-2 rounded-lg">HELP Children <FontAwesomeIcon icon={faHeart} style={{color:"#ea4633"}} /></NavLink>
                    </div>
                    <div className="relative w-[55%] h-[100%] p-20">
                         <img className=" rounded-xl hover:scale-[1.08] transaction-transform duration-500 shadow-lg" src="https://i.pinimg.com/736x/2a/16/ac/2a16acfc922adbe3a541c22a2127a131.jpg" alt="" />
                         <img className="absolute bottom-[5rem] left-40 w-[65%] hover:scale-[1.06] transaction-transform duration-500" src={childimg} alt="" />
                    </div>
               </div>
    
    </>)
}

export default LandingMain;