import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const AllSeller = () => {
    const {user} = useContext(AuthContext)
    const {data:sellers,refetch,isLoading}= useQuery({
        queryKey:['sellers'],
        queryFn: async() =>{
            const res = await fetch(`https://second-time-bye-server.vercel.app/sellers?email=${user?.email}`);
            const data = res.json()
            return data
        }
    })
    if(isLoading){
      return
  }
    const handleDelete = id =>{
      const confirm = window.confirm()
      if(confirm){
        fetch(`https://second-time-bye-server.vercel.app/user/${id}`,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          toast.success('Delete Successfully')
          refetch()
        }
      })
      }
    }
    const handleVerify = id =>{
      const confirm = window.confirm()
      if(confirm){
        fetch(`https://second-time-bye-server.vercel.app/sellers/${id}`,{
        method: 'PUT'
      })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          toast.success('Verify Successfully')
          refetch()
        }
      })
      }
    }
    return (
        <div className='px-20'>
        <h2 className="text-2xl font-bold my-5">All Sellers</h2>
        <div className="overflow-x-auto w-full">
<table className="table w-full">
<thead>
  <tr>
    <th>name</th>
    <th>email </th>
    <th>verify </th>
    <th>Delete</th>
  </tr>
</thead>
<tbody>
  {
     sellers.map(u => <tr key={u._id}>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={u?.user?.image} alt={u?.user?.name} />
              </div>
            </div>
          </div>
        </td>
        <td>{u?.user?.name}</td>
        <th>{ u?.user?.verified === false  ?
            <button onClick={()=> handleVerify(u._id)} className="btn btn-success btn-xs">verify</button>
            :
            <button className="btn btn-success btn-xs btn-disabled">verify successfully</button>
            }</th>
        <th> <button onClick={()=> handleDelete(u._id)} className="btn btn-warning btn-xs">delete</button></th>
      </tr>
       
       )}
</tbody>

</table>
</div>
    </div>
    );
};

export default AllSeller;