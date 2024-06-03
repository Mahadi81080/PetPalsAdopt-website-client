import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import useAuth from "../../Hooks/useAuth";

export function Register() {
  const{creatUser,userUpdateProfile}=useAuth()
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    creatUser(email, password)
      .then((result) => {
        console.log(result);
        userUpdateProfile(data.name, data.photoURL)
          .then(() => {
            // create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axios.post(`${import.meta.env.VITE_API_URL}/users`, userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("User added to the database");
                reset();
                toast.success("Registration successful!");
                navigate("/");
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("An error occurred during registration.");
      });
  };
  return (
    <div className="mt-28">
      <div className="bg-[#3498db] py-20 space-y-2 text-white text-center">
        <h2 className="text-6xl">Creat Account</h2>
        <div className="text-lg">
          <Link to="/">Home</Link> / Creat Account
        </div>
      </div>
      <Card className="mt-10 w-[700px] mx-auto">
        <CardHeader
          color="gray"
          className="mb-4 grid h-28 place-items-center bg-[#3498db]"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <Input
            type="text"
              label="Name"
              size="lg"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-400 text-left text-xs">
                This field is required
              </span>
            )}
            <Input
            type="text"
              label="Photo_URL"
              size="lg"
              {...register("photo", { required: true })}
            />
            <Input
            type="email"
              label="Email"
              size="lg"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-400 text-left text-xs">
                This field is required
              </span>
            )}
            <Input
            type="password"
              label="password"
              size="lg"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-400 text-left text-xs">
                This field is required
              </span>
            )}
            <input
              type="submit"
              value="Register"
              className=" py-2 rounded-lg text-white bg-[#3498db] mx-auto w-24"
            />
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/signin">
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold text-[#3498db]"
                >
                  Sign In
                </Typography>
              </Link>
            </Typography>
          </form>
          <ToastContainer></ToastContainer>
        </CardBody>
      </Card>
    </div>
  );
}
