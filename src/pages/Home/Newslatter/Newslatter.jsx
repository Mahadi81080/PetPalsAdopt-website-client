import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Newslatter = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const { email } = data;
    if (email) {
      toast.success("Thank you for subscribing to our newslatter !");
      reset();
    } else {
      toast.error("Something went wrong.");
    }
  };
  return (
    <div className="my-10 mx-10">
      <div className="text-center space-y-5 my-7">
        <h2 className="text-5xl font-semibold">
          Stay Updated with PetPalsAdopt!
        </h2>
        <p className="text-[#5b6a76] text-lg">
          Join our community of pet lovers and stay informed about the latest
          news, events, and heartwarming adoption stories. Subscribe to our
          newsletter for updates on new pets available for adoption, tips on pet
          care, volunteer opportunities, and exclusive offers. Don’t miss
          out—sign up today and help us make a difference in the lives of
          animals in need!
        </p>
      </div>
      <div className="w-full bg-gray-300 dark:bg-gray-500 bg-[url('https://source.unsplash.com/random/640x480')] bg-center bg-cover bg-blend-multiply rounded-md">
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-500 dark:text-white">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-200 dark:text-white">
            Find out about events and other news
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
            <input
              type="email"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
              {...register("email", { required: true })}
            />
            <input
              type="submit"
              value="Subscribe"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-blue-400 dark:bg-blue-400 text-white dark:text-gray-50"
            />
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Newslatter;
