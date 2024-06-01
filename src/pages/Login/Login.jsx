import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  const { singIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    singIn(email, password)
      .then((result) => {
        console.log(result);
        navigate(from, { replace: true });
        toast.success("Loging Successfully");
      })
      .catch((error) => {
        console.log("sing In error", error);
        toast.error("An error occurred during SingIn.");
      });
  };
  return (
    <div className="mt-28">
      <div className="bg-[#3498db] py-20 space-y-2 text-white">
        <h2 className="text-6xl">Account</h2>
        <div className="text-lg">
          <Link to="/">Home</Link> / Account
        </div>
      </div>
      <Card className="mt-10 w-[700px] mx-auto">
        <CardHeader
          color="gray"
          className="mb-4 grid h-28 place-items-center bg-[#3498db]"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
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
              label="Password"
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
              value="sign In"
              className=" py-2 rounded-lg text-white bg-[#3498db] mx-auto w-24"
            />
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Link to="/signUp">
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold text-[#3498db]"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </form>
        </CardBody>
      </Card>
      <ToastContainer></ToastContainer>
    </div>
  );
}
