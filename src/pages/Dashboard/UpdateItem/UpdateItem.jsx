import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?&key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, age, shortDescription, longDescription, location, image, _id } = useLoaderData();
  
  const axiosPublic = useAxiosPublic();
  const [axiosSecure] = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    let imageUrl;

    if (data.image && data.image[0]) {
      // New image file provided, upload it
      const imageFile = new FormData();
      imageFile.append("image", data.image[0]);

      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        imageUrl = res.data.data.display_url;
      } else {
        toast.error('Image upload failed');
        return;
      }
    } else {
      // No new image file provided, use existing image URL
      imageUrl = image;
    }

    // Now send the updated pet item data to the server with the image URL
    const petItem = {
      name: data.name,
      category: data.category,
      age: data.age,
      location: data.location,
      image: imageUrl,
      shortDescription: data.short_description,
      longDescription: data.long_description,
      date: new Date().toISOString(),
      adopted: false,
    };

    const menuRes = await axiosSecure.patch(`/petItem/${_id}`, petItem);
    console.log(menuRes.data);

    if (menuRes.data.modifiedCount > 0) {
      reset();
      toast.success('Your pet information updated');
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#f3f3f3] w-[850px] px-20 py-10 mx-auto space-y-4"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl">Update Your Pet Information</h2>
        </div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Pet name*</span>
          </div>
          <input
            type="text"
            defaultValue={name}
            className="input input-bordered w-full max-w-full"
            {...register("name", { required: true })}
          />
        </label>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Pet Category*</span>
            </div>
            <select
              defaultValue={category}
              className="select select-bordered w-full"
              {...register("category", { required: true })}
            >
              <option value="Cats">Cats </option>
              <option value="Dogs">Dogs</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Fish">Fish</option>
              <option value="Bird">Bird</option>
            </select>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Pet age*</span>
            </div>
            <input
              type="text"
              defaultValue={age}
              className="input input-bordered w-full"
              {...register("age", { required: true })}
            />
          </label>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Short Description*</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-5"
              defaultValue={shortDescription}
              {...register("short_description", { required: true })}
            ></textarea>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Pet location*</span>
            </div>
            <input
              type="text"
              defaultValue={location}
              className="input input-bordered w-full"
              {...register("location", { required: true })}
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Long Description*</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-32"
            defaultValue={longDescription}
            {...register("long_description", { required: true })}
          ></textarea>
        </label>
        <div>
          <input
            {...register("image")}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>
        <button className="btn bg-[#3498db] text-white">Update Your Post</button>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateItem;
