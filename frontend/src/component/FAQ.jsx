import {useState,useRef} from "react"
export const FAQ=(props)=>{

     let [t,set_t]=useState(true);
     let btn=useRef();
     let ansdiv=useRef();
    function toggle(){
       if(t==false){
          btn.current.innerHTML="–";
          ansdiv.current.style.display="block";
          set_t(true);
       }
       else{
         btn.current.innerHTML="+";
         ansdiv.current.style.display="none";
         set_t(false);
       }
    }
   return<>
   <div className="flex flex-row justify-auround items-center text-lg">
       <div className="w-[100%] flex flex-col ">
           <div className="w-[100%] font-bold">
           <p className="w-[100%] text-start">{props.que}</p>
           </div>
           <div className=" w-[100%] font-semibold" ref={ansdiv}>
            <p className="w-[100%]">{props.ans}</p>
           </div>
       </div>
       <div className="flex flex-col">
        <button className="font-bold" onClick={toggle} ref={btn}>+</button>
       </div>
   </div>
   </>
}