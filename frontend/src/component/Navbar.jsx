  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
  import image from '../assets/surjeet.png';
  
  function Navbar() {
    return (
        <div className="sticky top-0 h-[5rem] bg-white p-4 flex justify-end z-[50]">
             <div className='flex items-center gap-2'>
                  <div>
                       <img className='w-[2rem] h-[2rem] rounded-full' src={image} alt="" />
                  </div>
                  <div>
                      <p className="font-semibold">Surjeet Dhakad</p>
                      <p className="text-sm text-semibold text-zinc-500">Funder <FontAwesomeIcon icon={faAngleDown} /></p>
                </div>
             </div>
        </div>
    )
}
export default Navbar;