'use client';
import { fetchAllUsers } from "@/services/user.service";
import { User } from "@/types/user.types";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      await getAllUsers();
    };
    fetchUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await fetchAllUsers();
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        setUsers([]);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-amber-500">Welcome to Next.js!</h1>
      <div className="mt-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-white shadow rounded mb-2">
            <h2 className="text-xl text-black font-semibold">{user.name}</h2>
            <p className="text-gray-600">User ID: {user.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
