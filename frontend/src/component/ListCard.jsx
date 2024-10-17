function ListCard({img}){
     return(<>
             
             <div className="w-[18rem] h-[25rem] bg-white rounded-lg overflow-hidden p-3 flex flex-col justify-between shadow-lg easy-in-out duration-300 hover:scale-[1.02] z-[40] cursor-pointer">
                    <div>
                    <img className="w-[100%] h-[14rem]" src={img.imgurl} alt="Product Image" />
                    <p className="text-lg font-semibold">{`Contribute towards a childs education for ${img.month} months`}</p>
                    </div>
                    <button className="text-center text-sm font-semibold text-white p-2 bg-[#ea4633] rounded">
                        <p>Donet Now</p>
                        <p>&#8377;{img.amount}</p>
                    </button>
             </div>
     
     </>)
}

export default ListCard;