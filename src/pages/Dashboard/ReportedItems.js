import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const ReportedItems = () => {
    const {user} = useContext(AuthContext)
    const {data : reportedProduct = [],refetch} = useQuery({
        queryKey: ['reportedproduct'],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/reportedproduct?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    const handleDelete = id =>{
        const confirm = window.confirm()
        if(confirm){
          fetch(`http://localhost:5000/myproduct/${id}`,{
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
    console.log(reportedProduct)
    return (
        <div className='mx-20'>
            <h1 className="text-2xl font-bold my-5">My Products: {}</h1>
            <div className="overflow-x-auto w-full">
          <table className="table w-full">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>price</th>
                    <th>Delete</th>
                  </tr>
                </thead>
    <tbody>
      { 
         reportedProduct.map((p) => <tr key={p._id}>
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

export default ReportedItems;