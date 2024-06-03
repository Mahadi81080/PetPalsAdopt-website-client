import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import MyAddedPet from "../pages/Dashboard/MyAddedPet/MyAddedPet";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <Register></Register>,
      },
    ],
  },
  // dashboard related route
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // Normal users routes
      {
        path: "addItems",
        element: <AddItems></AddItems>,
      },
      {
        path: "myAddedPet",
        element: <MyAddedPet></MyAddedPet>,
        // loader:()=>fetch(`${import.meta.env.VITE_API_URL}/petItem`)
      },
      {
        path: "update",
        element: <UpdateItem></UpdateItem>,
      },

      // Admin routes
    ],
  },
]);
