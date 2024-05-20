import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from 'sweetalert2';
import axios from 'axios';

const Users = () => {

  // token
  const token = localStorage.getItem('access_token')

  //user fetch in database
  const { data : users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/users',{
        headers: {
          authorization : `Bearer ${token}`
        }
      })
      return res.data
    },
  })

  //create admin
  const makeAdmin = (data) => {
    //fetching data
    fetch(`http://localhost:5000/users/admin/${data._id}`,{
      method: 'PATCH'
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.modifiedCount > 0){
        refetch()
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You are admin now",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }


  return (
    <div className='w-2/3'>
      {/* user content section start */}
      {/* table section start */}
      <div className="my-12 w-full">
        <table className="table shadow-xl">
          {/* head */}
          <thead className="bg-orange-600 text-gray-200">
            <tr className="text-center">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {
              users.map((data, index) => <tr key={index} className="text-center hover:bg-gray-200">
                <td>{++index}</td>
                {/* name section start */}
                <td>{data.name}</td>
                {/* name section end */}
                {/* email section start */}
                <td>{data.email}</td>
                {/* email section end */}
                {/* role section start */}
                <td>{data.role === 'admin' ? <p className='text-base text-green-600'>Admin</p> : <FaUsers onClick={() => makeAdmin(data)} className='text-2xl mx-auto'></FaUsers>}</td>
                {/* role section end */}
                {/* delete section start */}
                <td><MdDelete className='bg-red-600 p-[2px] text-2xl text-white rounded-sm mx-auto'></MdDelete></td>
                {/* delete section end */}
              </tr>)
            }
            {/* row */}
          </tbody>
        </table>
      </div>
      {/* table section end */}
      {/* user content section end */}
    </div>
  );
};

export default Users;