import { Link, NavLink, Outlet } from "react-router-dom";
import { FaGift, FaHandshake, FaPlusSquare } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { RiGiftLine } from "react-icons/ri";

const Dashboard = () => {
  // TODO: get isadmin value from the database

  return (
    <div className="flex">
      {/* Dahboard side bar */}
      <div className="w-72 min-h-screen bg-white shadow-lg pt-10">
        <div className="flex justify-center items-center gap-8">
          <h2 className="text-xl font-semibold">USER DASHBOARD</h2>
          <Link to="/">
            <MdOutlineCancel className="text-2xl" />
          </Link>
        </div>

        <ul className="menu text-base-content space-y-5 pl-6 mt-10">
          <li>
            <NavLink
              to="/dashboard/addItems"
              className="flex items-center gap-3"
            >
              <FaPlusSquare />
              Add a pet
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myAddedPet"
              className="flex items-center gap-3"
            >
              <FaHandshake />
              My added pets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/adoptRequest"
              className="flex items-center gap-3"
            >
              <AiOutlineHeart />
              Adoption Request
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/donationCamp"
              className="flex items-center gap-3"
            >
              <FaGift />
              Create Donation Campaign
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myDonationCamp"
              className="flex items-center gap-3"
            >
              <RiGiftLine />
              My Donation Campaigns
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myDonation"
              className="flex items-center gap-3"
            >
              <IoWalletOutline />
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
