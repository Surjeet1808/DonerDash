import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar,faCopy} from '@fortawesome/free-regular-svg-icons'
import {faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
function Dashboard(){
        const [flag,setFlag]=useState(false);
        const Link="<Generated Link>";
        const message="Copied";
        const WhatsappMessage="Hi, I am raising funds for NayePankh Foundation to support important community initiatives. Please support me by donating through this link: https://example.com/donate.You can also use my referral code REF123 to help track contributions! Thank you for your support!"
        const encodedMessage = encodeURIComponent(WhatsappMessage);
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`;
        const copyLink= async()=>{
                await navigator.clipboard.writeText(Link);
                setFlag(true);
                setTimeout(()=>{
                        setFlag(false);
                },2000);
        }
        const handleShare=()=>{
             window.open(whatsappUrl, '_blank');
        }
  return (
    <>
        <div className='p-8 pt-0'>
                        <div className="h-[85%] rounded-t-lg bg-cover flex justify-center items-center bg-[url('https://media.istockphoto.com/id/478010888/photo/zeandra-b-w.jpg?s=612x612&w=0&k=20&c=cz7sMNv4dDt6T-GQ7EifUtgbYjmenOkB_dzFvhh8KV8=')]">
                                 <div className='bg-[rgba(0,0,0,0.4)] p-4'>
                                 <p className='text-3xl font-bold pb-2 text-red-600'>Hello Surjeet Dhakad</p>
                                 <p className='text-s text-white font-semibold'>Initial push is the toughest! go through the learning modules or reach out your fundraising manager to level up.</p>
                                 </div>
                        </div>
                       <div className='h-[100%] flex justify-center gap-10 bg-white'>
                            <div className='h-[100%] w-[40%] flex flex-col justify-center items-center p-10'>
                                  <div className='border-[0.5rem] border-dashed border-zinc-200 rounded-full h-[12rem] w-[12rem] flex flex-col justify-center items-center'>
                                          <p className='text-[#ea4633] font-semibold'>goal achieved</p>
                                          <p className='font-bold text-lg'>10</p>
                                  </div>
                                  <div className='p-5 flex flex-col justify-center items-center'>
                                          <p className='text-[#ea4633] font-semibold'>Totel goal</p>
                                          <p className='font-bold text-lg'>&#8377;30000</p>
                                  </div>
                            </div>
                            <div className='relative h-[100%] w-[50%] flex flex-col gap-4 justify-center items-center p-10'>
                                   <p className='text-[#ea4633] font-semibold'>level achieved : <span className='text-zinc-900'>Star</span></p>
                                   <div>
                                   <div className='w-[100%] bg-zinc-300 h-[5px] rounded-lg'></div>
                                   <div className='w-[100%] bg-zinc-300 h-[5px] rounded-lg'></div>
                                   </div>
                                   <div className='flex gap-4'>
                                       {flag&&<p className='w-[6rem] h-[2rem] absolute left-[16rem] top-[9.5rem] font-bold text-center bg-green-200 rounded-lg p-1 text-sm text-green-900 shadow-lg'>&#x2713; {message}</p>}
                                       <button className='py-1 px-2 rounded text-sm text-white bg-gradient-to-r from-[#e24636] to-[#5d5196] font-semibold'><FontAwesomeIcon icon={faStar} /> Rewards</button>
                                       <button className='py-1 px-2 rounded text-sm text-white bg-gradient-to-r from-[#e24636] to-[#5d5196] font-semibold' onClick={copyLink}><FontAwesomeIcon icon={faCopy} /> Copy Donetion Link</button>
                                   </div>
                                   <p>unlock ninja level at 5000</p>
                                   <p className='text-[#ea4633] font-semibold'>Time Left : <span className='text-zinc-900'>Campaign Expired</span></p>
                                   <button className='py-1 px-2 border-black rounded text-sm text-white bg-[#ea4633] font-semibold'>Extend Now</button>
                                   <div className='w-[90%] bg-[#ea4633] h-[5px] rounded-lg'></div>
                                   <p className='text-[#ea4633] font-semibold'>Refrence Code : <span className='text-zinc-900'>pra7432</span></p>
                                   <button className='py-1 px-2 rounded text-sm text-white bg-gradient-to-r from-[#e24636] to-[#5d5196] font-semibold'><NavLink to="/">Start Here</NavLink></button>
                            </div>
                       </div> 
                       <div className='border-t-2 border-zinc-300 bg-white rounded-b-lg p-4 px-10 py-3'>
                               <button className=' rounded p-2 text-white bg-gradient-to-r from-[#e24636] to-[#5d5196] font-semibold' onClick={handleShare}><FontAwesomeIcon icon={faArrowUpFromBracket} /> Share On Whatsapp</button>
                       </div>
                 </div>
    </>
  )
}

export default Dashboard