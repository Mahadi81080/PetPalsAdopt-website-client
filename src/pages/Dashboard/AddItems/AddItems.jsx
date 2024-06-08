import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import  { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { htmlToText } from "html-to-text";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?&key=${image_hosting_key}`;

const AddItems = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const [axiosSecure] = useAxiosSecure();
  const [longDescription, setLongDescription] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // HTML থেকে টেক্সট এক্সট্র্যাক্ট করা
      const textDescription = htmlToText(longDescription);

      // পোষ্য আইটেমের ডাটা সার্ভারে পাঠানো
      const petItem = {
        name: data.name,
        category: data.category,
        age: data.age,
        location: data.location,
        image: res.data.data.display_url,
        shortDescription: data.short_description,
        longDescription: textDescription,
        date: new Date().toISOString(),
        adopted: false,
        email: user.email,
        userName: user.displayName,
      };
      console.log(petItem);
      const menuRes = await axiosSecure.post("/petItem", petItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        toast.success(`${data.name} is added this Pet`);
        setLongDescription(""); // ReactQuill এর কনটেন্ট রিসেট করা
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#f3f3f3] w-[850px] p-20 mx-auto space-y-4"
      >
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Pet name*</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
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
              defaultValue="default"
              className="select select-bordered w-full"
              {...register("category", { required: true })}
            >
              <option disabled value="default">
                Category
              </option>
              <option value="Cats">Cats </option>
              <option value="Dogs">Dogs</option>
              <option value="Rabit">Rabbit</option>
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
              placeholder="Type here"
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
              placeholder="Type here"
              {...register("short_description", { required: true })}
            ></textarea>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Pet location*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("location", { required: true })}
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Long Description*</span>
          </div>
          <ReactQuill
            value={longDescription}
            onChange={setLongDescription}
            className="bg-white"
            placeholder="Type here"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Pet Picture*</span>
          </div>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </label>
        <button className="btn bg-[#3498db] text-white">Add a Pet</button>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddItems;
