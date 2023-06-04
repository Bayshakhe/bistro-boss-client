import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt, FaUserSecret } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure()
  const { refetch, data: users = [] } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleDeleteUser = (id) => {

  };
  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            refetch()
            Swal.fire({
                position: 'top-middle',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }

  return (
    <div>
      <p className="text-3xl uppercase">Total Users: {users.length}</p>
      <div className="overflow-x-auto">
        <table className="table table-w-full mt-4">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === 'Admin' ? "Admin" : <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost bg-[#D1A054] ">
                    <FaUserSecret></FaUserSecret>
                  </button>}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-ghost bg-red-600 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
