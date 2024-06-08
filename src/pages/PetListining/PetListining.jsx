import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import PetList from "../../Components/PetList";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useState } from "react";

const PetListining = () => {
  const axiosPublic = useAxiosPublic();
  const { data: petListining = [] } = useQuery({
    queryKey: ["petListining"],
    queryFn: async () => {
      const res = await axiosPublic.get("/petItem");
      return res.data;
    },
  });
  const { register, handleSubmit } = useForm();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const onSubmit = (data) => {
    setSearchTerm(data.title);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredPetListining = petListining
    .filter((pet) => {
      const matchesSearchTerm = pet.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory
        ? pet.category === selectedCategory
        : true;
      return matchesSearchTerm && matchesCategory;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <div className="mt-24 mb-8 mx-10">
      <Helmet>
        <title>PetListining__</title>
      </Helmet>
      <div className="text-center space-y-3 mb-8">
        <h2 className="text-4xl font-bold">Find Your Perfect Pet</h2>
        <p className="text-lg max-w-3xl mx-auto text-[#5b6a76]">
          Explore our diverse selection of pets looking for their forever homes.
          Whether you are searching for a playful puppy, a cuddly kitten, or a
          unique exotic pet, our listing page has the perfect companion waiting
          for you.
        </p>
      </div>
      <div className="flex justify-center gap-4 lg:gap-10 mx-3 lg:mx-0 my-7 ">
        <select
          onChange={handleCategoryChange}
          defaultValue="default"
          className="select select-bordered"
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full sm:w-auto"
        >
          <input
            type="text"
            placeholder="Search by Name"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3 border border-gray-300"
            {...register("title")}
          />
          <input
            type="submit"
            value="Search"
            className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-blue-400 dark:bg-blue-400 text-gray-900 dark:text-gray-50"
          />
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7">
        {filteredPetListining.map((list) => (
          <PetList key={list._id} list={list}></PetList>
        ))}
      </div>
    </div>
  );
};

export default PetListining;
