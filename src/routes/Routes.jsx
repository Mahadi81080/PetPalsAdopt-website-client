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
import DonationCampaing from "../pages/Dashboard/DonationCampaing/DonationCampaing";
import MyDonation from "../pages/Dashboard/MyDonation/MyDonation";
import PetListining from "../pages/PetListining/PetListining";
import PetDetails from "../Components/PetDetails";
import DonationCampaning from "../pages/DonationCampaining/DonationCampaning";
import DonationDetails from "../Components/DonationDetails";
import MyDonationCampaing from "../pages/Dashboard/MyDonation/MyDonationCampaing";
import UpdateDonation from "../pages/Dashboard/UpdateDonation/UpdateDonation";
import AdoptRequest from "../pages/Dashboard/AdoptRequest.jsx/AdoptRequest";
import AllUsers from "../pages/Dashboard/AllUser/AllUsers";
import AllPets from "../pages/Dashboard/AllPets/AllPets";
import AllDonationCamp from "../pages/Dashboard/AllDonationCamp/AllDonationCamp";
import AdminRoute from "./AdminRoute";
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
      {
        path: "/petList",
        element: <PetListining></PetListining>,
      },
      {
        path: "/petDetails/:id",
        element: (
          <PrivateRoute>
            <PetDetails></PetDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/petItem/${params.id}`),
      },
      {
        path: "/donationCampaning",
        element: <DonationCampaning></DonationCampaning>,
      },
      {
        path: "/donationDetails/:id",
        element: (
          <PrivateRoute>
            <DonationDetails></DonationDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/donation/${params.id}`),
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
      },
      {
        path: "adoptRequest",
        element:<AdoptRequest></AdoptRequest>
      },
      {
        path: "update/:id",
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/petItem/${params.id}`),
      },
      {
        path: "donationCamp",
        element: <DonationCampaing></DonationCampaing>,
      },
      {
        path: "myDonationCamp",
        element: <MyDonationCampaing></MyDonationCampaing>,
      },
      {
        path: "updateDonation/:id",
        element: <UpdateDonation></UpdateDonation>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/donation/${params.id}`),
      },
      {
        path: "myDonation",
        element: <MyDonation></MyDonation>,
      },

      // Admin routes
      {
        path:"allUsers",
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:"allPets",
        element:<AdminRoute><AllPets></AllPets></AdminRoute>
      },
      {
        path:"allDonationCamp",
        element:<AdminRoute><AllDonationCamp></AllDonationCamp></AdminRoute>
      }
    ],
  },
]);
