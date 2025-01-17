import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  Avatar,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import logo from "../../../assets/logo/Orange_and_Black_Playful_Pets_Logo-removebg-preview.png";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import useAuth from "../../../Hooks/useAuth";

// profile menu component
const profileMenuItems = [];

function ProfileMenu({ profileImageUrl, userName, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt={userName}
            className="border border-gray-900 p-0.5"
            src={
              profileImageUrl ||
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            }
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }) => (
          <MenuItem
            key={label}
            onClick={closeMenu}
            className="flex items-center gap-2 rounded"
          >
            {React.createElement(icon, {
              className: "h-4 w-4",
              strokeWidth: 2,
            })}
            <Typography as="span" variant="small" className="font-normal">
              {label}
            </Typography>
          </MenuItem>
        ))}

        <MenuItem className="flex items-center gap-2 rounded">
          <UserCircleIcon className="h-4 w-4" strokeWidth={2} />
          <Typography as="span" variant="small" className="font-normal">
            {userName}
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-4"
          >
            <path
              fillRule="evenodd"
              d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
              clipRule="evenodd"
            />
          </svg>
          <Link to='dashboard'>
            <Typography as="span" variant="small" className="font-normal">
              Dashboard
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem
          onClick={onLogout}
          className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        >
          <PowerIcon className="h-4 w-4 text-red-500" strokeWidth={2} />
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color="red"
          >
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logOut } = useAuth();
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to='/petList' href="#" className="flex items-center">
          Pet Listing
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to='/donationCampaning' className="flex items-center">
          Donation Campaigns
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="overflow-scroll">
      <Navbar className=" fixed top-0 z-10 opacity-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to='/'><img src={logo} className="w-40" /></Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {user ? (
                <ProfileMenu
                  profileImageUrl={user.photoURL}
                  userName={user.displayName}
                  onLogout={logOut}
                />
              ) : (
                <>
                  <Link to="/login">
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block bg-[#3498db]"
                    >
                      <span>Log In</span>
                    </Button>
                  </Link>
                  <Link to="/signUp">
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block bg-[#3498db]"
                    >
                      <span>Register</span>
                    </Button>
                  </Link>
                </>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Link to="/login">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block bg-[#3498db]"
              >
                <span>Log In</span>
              </Button>
            </Link>
            <Link to="/signUp">
              {" "}
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block bg-[#3498db]"
              >
                <span>Register</span>
              </Button>
            </Link>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
