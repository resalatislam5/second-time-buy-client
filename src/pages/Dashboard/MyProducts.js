import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import '../../Components/Loader/Loader.css'

const MyProducts = () => {
    const {user} = useContext(AuthContext)
    const {data:myproducts,isLoading,refetch}= useQuery({
        queryKey:['products'],
        queryFn: async() =>{
            const res = await fetch(`https://second-time-bye-server.vercel.app/myproducts?email=${user?.email}`);
            const data = res.json()
            return data
        }
    })
    if(isLoading){
      return <div className='flex justify-center h-[70vh] items-center'><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    }
    const handleDelete = id =>{
        const confirm = window.confirm()
        if(confirm){
          fetch(`https://second-time-bye-server.vercel.app/myproduct/${id}`,{
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
      const handleAdvertise = (id) =>{
        fetch(`https://second-time-bye-server.vercel.app/advertise/${id}`    ,{
          method: 'PUT',
      })
        .then(res => res.json())
        .then(data =>{
            refetch()
            toast.success('Advertise successfully')
        })
    }
    return (
        <div className='lg:mx-20 mx-5'>
            <h1 className="text-2xl font-bold my-5">My Products: {myproducts.length}</h1>
            <div className="overflow-x-auto w-full">
          <table className="table w-full">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>price</th>
                    <th>Advertise</th>
                    <th>Delete</th>
                  </tr>
                </thead>
    <tbody>
      { 
         myproducts.map((p) => <tr key={p._id}>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={p?.img} alt={p?.name} />
                  </div>
                </div>
              </div>
            </td>
            <td>{p?.name}</td>
            <td>{p?.resalePrice}</td>
            { !p.avt ?
              <th>
              <button onClick={()=> handleAdvertise(p._id)} className="btn btn-warning btn-xs">Advertise</button>
            </th>
            :
            <th>
              <button className="btn btn-xs btn-disabled">Advertise success</button>
            </th>
            }
            <th>
              <button onClick={()=> handleDelete(p._id)} className="btn btn-warning btn-xs">Delete</button>
            </th>
          </tr>
           )}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProducts;