import { useLoaderData } from "react-router-dom";
import UsersTable from "../UsersTable/UsersTable";
import { useState } from "react";

const AddedUsers = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <UsersTable
                key={user._id}
                user={user}
                index={index}
                users={users}
                setUsers={setUsers}
              ></UsersTable>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddedUsers;
