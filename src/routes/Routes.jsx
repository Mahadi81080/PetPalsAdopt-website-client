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
        path:"/petList",
        element:<PetListining></PetListining>
      },
      {
        path:"/petDetails/:id",
        element:<PrivateRoute><PetDetails></PetDetails></PrivateRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/petItem/${params.id}`)
      },
      {
        path:"/donationCampaning",
        element:<DonationCampaning></DonationCampaning>
      },
      {
        path:"/donationDetails/:id",
        element:<PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/donation/${params.id}`)
      }
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
        path: "update/:id",
        element: <UpdateItem></UpdateItem>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/petItem/${params.id}`)
      },
      {
        path:"donationCamp",
        element:<DonationCampaing></DonationCampaing>
      },
      {
        path:"myDonation",
        element:<MyDonation></MyDonation>
      }

      // Admin routes
    ],
  },
]);
