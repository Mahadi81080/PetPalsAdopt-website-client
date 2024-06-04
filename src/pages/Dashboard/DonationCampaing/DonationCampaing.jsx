import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?&key=${image_hosting_key}`;

const DonationCampaing = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const [axiosSecure] = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send menu item data to the server with the image
      const campaignData = {
        image: res.data.data.display_url,
        maxDonationAmount: data.maxDonationAmount,
        lastDate: data.lastDate,
        shortDescription: data.shortDescription,
        longDescription: data.longDescription,
        createdAt: new Date().toISOString(),
      };
      const menuRes = await axiosSecure.post("/donation", campaignData);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        toast.success("Donation campaign created successfully!");
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#f3f3f3] w-[850px] px-20 py-10 mx-auto space-y-4"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl">Create Donation Campaign</h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Maximum Donation Amount*</span>
            </div>
            <input
              type="number"
              placeholder="Enter maximum donation amount"
              className="input input-bordered w-full"
              {...register("maxDonationAmount", { required: true })}
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Last Date of Donation*</span>
            </div>
            <input
              type="date"
              className="input input-bordered w-full"
              {...register("lastDate", { required: true })}
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Short Description*</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-5"
              placeholder="Enter short description"
              {...register("shortDescription", { required: true })}
            ></textarea>
          </label>
        </div>
        <div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Long Description*</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-32"
              placeholder="Enter long description"
              {...register("longDescription", { required: true })}
            ></textarea>
          </label>
        </div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Pet Picture*</span>
          </div>
          <input
            type="file"
            className="file-input w-full max-w-xs"
            {...register("image", { required: true })}
          />
        </label>
        <button type="submit" className="btn bg-[#3498db] text-white">
          Create Donation Campaign
        </button>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default DonationCampaing;
