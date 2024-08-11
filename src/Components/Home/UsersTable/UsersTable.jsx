import PropTypes from "prop-types";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UsersTable = ({ user, index, users, setUsers }) => {
  const { name, email, password, gender, _id } = user;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "This User has been deleted.", "success");
              const remaining = users.filter((user) => user._id !== _id);
              setUsers(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <tr className="hover">
        <th>{index + 1}</th>
        <th>{name}</th>
        <td>{email}</td>
        <td>{password}</td>
        <td>{gender}</td>
        <td>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-sm">
              <FaPen />
            </button>
          </Link>
        </td>
        <td>
          <button onClick={() => handleDelete(_id)} className="btn btn-sm">
            <FaTrash className="text-red-500" />
          </button>
        </td>
      </tr>
    </>
  );
};
UsersTable.propTypes = {
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func.isRequired,
};

export default UsersTable;
