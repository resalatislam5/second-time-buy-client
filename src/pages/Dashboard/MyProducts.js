import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext)
    const {data:myProducts,isLoading,refetch }= useQuery({
        queryKey:['products'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/myproducts?email=${user?.email}`);
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
      console.log(myProducts)
    return (
        <div className='mx-20'>
            <h1 className="text-2xl font-bold my-5">My Products</h1>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>price</th>
        <th>pay </th>
      </tr>
    </thead>
    <tbody>
      {
         myProducts.map(product => <tr>
            <td key={product._id}>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={product?.img} alt={product?.name} />
                  </div>
                </div>
              </div>
            </td>
            <td>{product?.name}</td>
            <td>{product?.resalePrice}</td>
            <th>
              <button onClick={()=> handleDelete(product._id)} className="btn btn-success btn-xs">Delete</button>
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