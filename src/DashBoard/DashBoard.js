import React, { useEffect, useState } from "react";
import User from "../User/User";

const DashBoard = () => {
    const [users, setUsers] = useState ([]);
    useEffect(()=> {
        fetch("https://assignment12-server-henna.vercel.app/users")
        .then((res)=> res.json())
        .then((data)=> setUsers(data))
    }, [])
  return (
    <div>
        {
            users.map(user => <User key={user._id} user={user}></User>)
        }
    </div>
  );
};

export default DashBoard;
