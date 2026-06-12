import React, { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import UserCard from "../../components/admin/UserCard";
import { getAllUsers, deleteUser } from "../../services/adminService";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();

      setUsers(
        data.users
      );
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this user?"
      );

    if (!confirmDelete)
      return;

    try {
      await deleteUser(id);
      setUsers(
        users.filter(
          user =>
            user._id !== id
        )
      );
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>
      <h1 className=" text-4xl font-bold text-blue-700 mb-10 ">
        Users
      </h1>
      {
        loading ?
          (
            <h2>
              Loading...
            </h2>
          )
          :
          (
            <div className=" grid md:grid-cols-2 gap-8 ">
              {
                users.map(
                  user => (
                    <UserCard
                      key={
                        user._id
                      }
                      user={
                        user
                      }
                      onDelete={
                        handleDelete
                      }
                    />
                  )
                )
              }
            </div>
          )
      }
    </AdminLayout>
  );
};

export default Users;