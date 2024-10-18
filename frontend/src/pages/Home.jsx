
import {BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Sidebar from '../component/Sidebar.jsx';
import Transactions from './Transactions.jsx';
import Dashboard from './Dashboard.jsx';
import Navbar from '../component/Navbar.jsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import Status from '../component/Status.jsx';
import Listing from './Listing.jsx';
import Landing from './Landing.jsx';
function Home(){
    
    const location = useLocation().pathname;

    return(
        <>
            <div className={`h-[100vh] flex`}>

                {!(location=='/')&&<Sidebar/>}

                 <div className='flex flex-col w-full bg-[#eaebec] overflow-y-auto'>

                  {/* Subnavbar */}
                 {!(location=='/')&&<Navbar/>}

                    {!(location=='/')&&<div className="h-[5rem] p-8 pb-0">
                        <div className='flex justify-between items-center'>
                            <p className='text-lg font-bold pb-5'>Dashboard</p>
                            <div className='flex gap-2 items-center pb-5'>
                            <FontAwesomeIcon icon={faHouse} style={{color:"#ea4633",}} />
                                   {location}
                            </div>
                        </div>
                    </div>}


                    <Outlet/>

                     {/* <Routes>
                       
                    </Routes> */}

                 </div>
            </div>
        </>
    )
}

export default Home;