import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
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
    // children: [
    //   // Normal users routes
    //   {
    //     path: "userHome",
    //     element: <UserHome></UserHome>,
    //   },
    //   {
    //     path: "cart",
    //     element: <Cart></Cart>,
    //   },
    //   {
    //     path: "payment",
    //     element: <Payment></Payment>,
    //   },
    //   {
    //     path: "paymentHistory",
    //     element: <PaymentHistory></PaymentHistory>,
    //   },
    //   // Admin routes
    //   {
    //     path: "adminHome",
    //     element: (
    //       <AdminRoute>
    //         <AdminHome></AdminHome>
    //       </AdminRoute>
    //     ),
    //   },
    //   {
    //     path: "allUsers",
    //     element: (
    //       <AdminRoute>
    //         <AllUsers></AllUsers>
    //       </AdminRoute>
    //     ),
    //   },
    //   {
    //     path: "addItems",
    //     element: (
    //       <AdminRoute>
    //         <AddItems></AddItems>
    //       </AdminRoute>
    //     ),
    //   },
    //   {
    //     path: "manageItems",
    //     element: (
    //       <AdminRoute>
    //         <ManageItems></ManageItems>
    //       </AdminRoute>
    //     ),
    //   },
    //   {
    //     path: "updateItem/:id",
    //     element: (
    //       <AdminRoute>
    //         <UpdateItem></UpdateItem>
    //       </AdminRoute>
    //     ),
    //     loader: ({ params }) =>
    //       fetch(`https://bistro-boss-srver.vercel.app/menu/${params.id}`),
    //   },
    // ],
  },
]);
