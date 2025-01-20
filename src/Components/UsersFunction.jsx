import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersFunction = () => {
  const [users, setUsers] = useState([]);

  const usersList = async () => {
    try {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    usersList();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div>
      <div>
        <ol>
          {users.map((user) => (
            <li>
              <h1>{user.name}</h1>
              <p>Username : {user.username}</p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default UsersFunction;
