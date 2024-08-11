import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Components/Home/Home/Home";
import AddUsers from "../Components/AddUsers/AddUsers";
import AddedUsers from "../Components/Home/AddedUsers/AddedUsers";
import UpdateUser from "../Components/UpdateUser/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/addUsers",
        element: <AddUsers />,
      },
      {
        path: "/addedUsers",
        element: <AddedUsers />,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/update/:id",
        element: <UpdateUser />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },
    ],
  },
]);

export default router;
