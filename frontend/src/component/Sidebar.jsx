import React from 'react'
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDesktop,faList,faArrowTurnDown,faBookOpen} from '@fortawesome/free-solid-svg-icons'
import {faCircleQuestion,faStar,faMessage} from '@fortawesome/free-regular-svg-icons'
function Sidebar(){
    return(<>
         {/* sidebar */}
         <div className={`h-[100%] p-5 ps-10 pr-0 w-[20%] bg-white flex flex-col gap-3 items-center shadow-lg`}>
                       {/* logo */}
                       <div className="w-[100%] p-8 flex justify-center gap-2 shadow-lg">
                            <div className="px-10 py-2 border-2 border-[#00a2e8] rounded-lg cursor-pointer">
                                  <p className="text-lg text-[#00a2e8] font-semibold ">Logo</p>
                            </div>
                            <div>
                                 
                            </div>
                       </div>
                       <div className='w-[100%] pr-10'>
                        <div className="w-[100%] p-5 py-3 bg-[#fef4f3] rounded-lg">
                       <NavLink to="/">
                           <p className="text-[#ea4633]  font-semibold">General</p>
                           <p className="text-xs font-semibold">Dashboard</p>
                       </NavLink>
                       </div>
                       </div>
                       <div className="w-[100%] p-2">
                             <ul className='flex flex-col gap-2 text-zinc-800 text-sm'>
                                 <li>
                                 <NavLink className={({isActive})=>`w-[85%] flex gap-2 items-center font-semibold p-2 rounded-lg ${isActive?"bg-[#ea4633] text-white":""}`} to="/General/dashboard">
                                        <FontAwesomeIcon icon={faDesktop} />
                                        <p>DashBoard</p>
                                  </NavLink>
                                 </li>
                                 <li >
                                    <NavLink className={({isActive})=>`w-[85%] flex gap-2 items-center font-semibold p-2 rounded-lg ${isActive?"bg-[#ea4633] text-white":""}`} to="/General/transactions">
                                        <FontAwesomeIcon icon={faList} />
                                        <p>Transactions</p>
                                    </NavLink>
                                 </li>
                                 <li className='flex gap-2 items-center font-semibold'>
                                 <NavLink className={({isActive})=>`w-[85%] flex gap-2 items-center font-semibold p-2 rounded-lg ${isActive?"bg-[#ea4633] text-white":""}`} to="/">
                                        <FontAwesomeIcon icon={faArrowTurnDown} />
                                        <p>Start Here</p>
                                   </NavLink>
                                 </li><li className='flex gap-2 items-center font-semibold'>
                                   <NavLink className={({isActive})=>`w-[85%] flex gap-2 items-center font-semibold p-2 rounded-lg ${isActive?"bg-[#ea4633] text-white":""}`} to="/General/faq">  
                                     <FontAwesomeIcon icon={faCircleQuestion} />
                                     <p>FAQ</p>
                                  </NavLink>      
                              </li><li className='flex gap-2 items-center font-semibold'>
                                 <NavLink className={({isActive})=>`w-[85%] flex gap-2 items-center font-semibold p-2 rounded-lg ${isActive?"bg-[#ea4633] text-white":""}`} to="/General/learning-modules"> 
                                     <FontAwesomeIcon icon={faBookOpen} />
                                     <p>Learning Modules</p>
                                 </NavLink>
                              </li><li className='flex gap-2 items-center font-semibold'>
                                   <NavLink className={({isActive})=>`w-[85%] flex gap-2 items-center font-semibold p-2 rounded-lg ${isActive?"bg-[#ea4633] text-white":""}`} to="/General/rewards"> 
                                     <FontAwesomeIcon icon={faStar} />
                                     <p>Rewards</p>
                                    </NavLink>
                              </li><li className='flex gap-2 items-center font-semibold'>
                                 <NavLink className={({isActive})=>`w-[85%] flex gap-2 items-center font-semibold p-2 rounded-lg ${isActive?"bg-[#ea4633] text-white":""}`} to="/General/feedback"> 
                                     <FontAwesomeIcon icon={faMessage} />
                                     <p>Feedback</p>
                                 </NavLink>
                              </li>
                             </ul>
                       </div>
                 </div>
    </>)
}

export default Sidebar;