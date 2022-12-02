import React from "react";

const User = ({ user }) => {
  const { role, email } = user;
  if (role === "Admin") {
    return (
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>{email}</td>
              <td>{role}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default User;
