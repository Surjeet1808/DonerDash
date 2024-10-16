
function Transactions(){
    

    return(
        <>

            <div className="w-[90%] mx-auto bg-white rounded-lg p-10">
                   <table className="w-[100%] border">
                           <tr className="border-b">
                               <th className="w-[15%] text-center py-2">Id</th>
                               <th className="w-[15%] text-center">Name</th>
                               <th className="w-[15%] text-center">Ammount</th>
                               <th className="w-[15%] text-center">Transaction Id</th>
                               <th className="w-[15%] text-center">Date</th>
                               <th className="w-[15%] text-center">PanCard</th>
                           </tr>
                           <tr className="border-b">
                             <td className="w-[15%] text-center py-1">1</td>
                             <td className="w-[15%] text-center">John Doe</td>
                             <td className="w-[15%] text-center">$100</td>
                             <td className="w-[15%] text-center">123456789</td>
                             <td className="w-[15%] text-center">2022-01-01</td>
                             <td className="w-[15%] text-center">XXXX-1234</td>
                           </tr>
                           <tr className="border-b">
                             <td className="w-[15%] text-center py-1">1</td>
                             <td className="w-[15%] text-center">John Doe</td>
                             <td className="w-[15%] text-center">$100</td>
                             <td className="w-[15%] text-center">123456789</td>
                             <td className="w-[15%] text-center">2022-01-01</td>
                             <td className="w-[15%] text-center">XXXX-1234</td>
                           </tr>
                   </table>
            </div>

        </>
    )
}

export default Transactions;