import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const PetDetails = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const {
    name,
    image,
    longDescription,
    shortDescription,
    age,
    location,
    date,
    _id,
  } = useLoaderData();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const onSubmit = async (data) => {
    console.log(data);
    const adoptRequest = {
      petId: _id,
      image: image,
      petName: name,
      address: data.address,
      phoneNumber: data.phoneNumber,
      email: user.email,
      userName: user.displayName,
    };
    const menuRes = await axiosPublic.post("/adoptRequest", adoptRequest);
    console.log(menuRes.data);
    if (menuRes.data.insertedId) {
      reset();
      toast.success("Submitted your adopt request");
    }
    reset();
  };

  return (
    <div>
      <div className="mt-20 mx-10">
        <Helmet>
          <title>Pet Listing || Pet Details</title>
        </Helmet>
        <div className="bg-[#b9e8f4] p-20 mb-4 text-center font-extrabold text-3xl">
          <h2>Pet Details</h2>
        </div>
        <section className="bg-[#f5f9fa] dark:bg-gray-100 text-gray-100 dark:text-gray-800 ">
          <div className="container flex justify-center  flex-col mx-auto lg:flex-row">
            <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                <img
                  src={image}
                  alt=""
                  className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-2/5 text-black p-5 space-y-5 mt-10">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="flex gap-5 items-center ">
                  <p className="text-lg font-medium leading-snug">Pet_name :</p>
                  <p className="leading-snug">{name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="flex gap-5 items-center ">
                  <p className="text-lg font-medium leading-snug">Pet_age :</p>
                  <p className="leading-snug">{age} month</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="flex gap-5 items-center ">
                  <p className="text-lg font-medium leading-snug">
                    Pet_location :
                  </p>
                  <p className="leading-snug">{location}</p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="flex gap-5 items-center">
                  <p className="text-lg font-medium leading-snug">
                    Short_description :{" "}
                    <span className="text-base font-normal">
                      {shortDescription}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="flex gap-5 ">
                  <p className="text-lg font-medium leading-snug">
                    Long_description :{" "}
                    <span className="text-base font-normal">
                      {longDescription}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4 pb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="flex gap-5 ">
                  <p className="text-lg font-medium leading-snug">
                    Published_date :
                    <span className="text-base font-normal">
                      {new Date(date).toLocaleDateString()}
                    </span>
                  </p>
                </div>
              </div>
              <div className="text-center mt-10">
                <Button
                  className="btn bg-[#3498db] text-white"
                  onClick={handleOpen}
                >
                  Adopt
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Dialog open={open} handler={handleOpen} size="sm">
        <DialogHeader>Pet Name : {name}</DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogBody
            divider
            className="grid grid-cols-1 gap-6 overflow-y-auto max-h-96"
          >
            <div>
              <p className="text-sm font-medium leading-snug">User Name</p>
              <Input
                type="text"
                name="name"
                value={user.displayName}
                disabled
              />
            </div>
            <div>
              <p className="text-sm font-medium leading-snug">User Email</p>
              <Input type="email" name="email" value={user.email} disabled />
            </div>
            <div>
              <p className="text-sm font-medium leading-snug">Phone Number</p>
              <Input
                type="tel"
                name="phoneNumber"
                required
                {...register("phoneNumber", { required: true })}
              />
            </div>
            <div>
              <p className="text-sm font-medium leading-snug">Address</p>
              <Input
                type="text"
                name="address"
                required
                {...register("address", { required: true })}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button type="submit" className="bg-blue-300">
              <span>Submit</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default PetDetails;
