import { NavLink, Outlet } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaCalendar, FaHome } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { FaList } from "react-icons/fa6";

const Dashboard = () => {
  // TODO: get isadmin value from the database

  return (
    <div className="flex">
      {/* Dahboard side bar */}
      <div className="w-72 min-h-screen bg-white shadow-lg">
        <ul className="menu text-base-content space-y-5 pl-6 mt-20">
          <li>
            <NavLink
              to="/dashboard/addItems"
              className="flex items-center gap-3"
            >
              <FaHome></FaHome>Add a pet
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myAddedPet"
              className="flex items-center gap-3"
            >
              <FaCalendar></FaCalendar>My added pets
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart" className="flex items-center gap-3">
              <TiShoppingCart></TiShoppingCart>Adoption Request
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/donationCamp"
              className="flex items-center gap-3"
            >
              <VscPreview />
              Create Donation Campaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/paymentHistory"
              className="flex items-center gap-3"
            >
              <FaList />
              My Donation Campaigns
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/paymentHistory"
              className="flex items-center gap-3"
            >
              <FaList />
              My Donations
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1 px-12 py-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
