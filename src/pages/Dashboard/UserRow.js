import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{user.email}</td>
      <td>
        {role !== "admin" && (
          <button
            onClick={makeAdmin}
            class="btn bg-green-600 text-white btn-xs"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn bg-red-600 btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
