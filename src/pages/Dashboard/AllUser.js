import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const AllUser = () => {
    const {user} = useContext(AuthContext)
    const {data:users,refetch,isLoading}= useQuery({
        queryKey:['users'],
        queryFn: async() =>{
            const res = await fetch(`https://second-time-bye-server.vercel.app/users?email=${user?.email}`);
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
    return (
        <div className='px-20'>
        <h2 className="text-2xl font-bold my-5">MyOrder</h2>
        <div className="overflow-x-auto w-full">
<table className="table w-full">
<thead>
  <tr>
    <th>Image</th>
    <th>name</th>
    <th>location</th>
    <th>role</th>
    <th>Delete</th>
  </tr>
</thead>
<tbody>
  {
     users.map(u => <tr>
        <td key={u._id}>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={u?.user?.image} alt={u?.user?.name} />
              </div>
            </div>
          </div>
        </td>
        <td>{u?.user?.name}</td>
        <td>{u?.user?.location}</td>
        <td>{u?.user?.role}</td>
        <th>
              <button onClick={()=> handleDelete(u._id)} className="btn btn-success btn-xs">delete</button>
            </th>
      </tr>
       
       )}
</tbody>

</table>
</div>
    </div>
    );
};

export default AllUser;