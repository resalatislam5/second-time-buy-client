import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import '../../Components/Loader/Loader.css'

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    const {data:myOrders,isLoading }= useQuery({
        queryKey:['booking'],
        queryFn: async() =>{
            const res = await fetch(`https://second-time-bye-server.vercel.app/booking?email=${user?.email}`,{
              headers:{
                authorization:`bearer ${localStorage.getItem('product-token')}`
              }
            });
            const data = res.json()
            return data
        }
    })
    if(isLoading){
      return <div className='flex justify-center h-[70vh] items-center'><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    }
    return (
        <div className='lg:mx-20 mx-5'>
            <h2 className="text-2xl font-bold my-5">MyOrder</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Image</th>
        <th>title</th>
        <th>price</th>
        <th>pay</th>
      </tr>
    </thead>
    <tbody>
      {
         myOrders.result.map(order => <tr key={order._id}>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={order?.image} alt={order?.name} />
                  </div>
                </div>
              </div>
            </td>
            <td>{order?.itemName}</td>
            <td>{order?.price}</td>
            <th>
              <button className="btn btn-success btn-xs">pay</button>
            </th>
          </tr>
           
           )}
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyOrders;