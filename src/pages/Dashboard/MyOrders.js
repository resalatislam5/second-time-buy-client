import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    const {data:myOrders,isFetching }= useQuery({
        queryKey:['booking'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`);
            const data = res.json()
            return data
        }
    })
    if(isFetching ){
        return
    }
    return (
        <div className='px-20'>
            <h2 className="text-2xl font-bold my-5">MyOrder</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Image</th>
        <th>title</th>
        <th>price</th>
        <th>pay </th>
      </tr>
    </thead>
    <tbody>
      {
         myOrders.result.map(order => <tr>
            <td key={order._id}>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user?.image} alt={order?.name} />
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