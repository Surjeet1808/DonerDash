import ListCard from "../component/ListCard";

function Listing(){
      
      const data=[
          {
            month:3,
            imgurl:"https://images.unsplash.com/photo-1682786308110-fab1fe5e9446?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9vciUyMGNoaWxkcmVufGVufDB8fDB8fHww",
            amount:6000
          },
          {
            month:6,
            imgurl:"https://media.istockphoto.com/id/476374336/photo/village-girl-studying-with-her-brother.jpg?s=612x612&w=0&k=20&c=nKWRCECuc9YkO67znqt9PPcvlqEvT55eGXlXa8IuRmo=",
            amount:12000
          },
          {
            month:9,
            imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-K24ML9ngCL8wTRElHu1NLEWwEDAVeH8hLA&s",
            amount:18000
          },
          {
            month:12,
            imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRETEeLE7PMRpF3S9SqmzUDWiC0Y3Fv3mHVnA&s",
            amount:24000
          }
      ];
   return(<>
           <div className="w-[100%] grid grid-cols-3 gap-5 p-10">
                 {
                    data.map((img,index)=>{
                        return <ListCard img={img} key={index}/>
                    })
                 }
           </div>
   
   </>)
}

export default Listing;