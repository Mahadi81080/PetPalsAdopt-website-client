import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import PetList from "../../Components/PetList";

const PetListining = () => {
  const axiosPublic = useAxiosPublic();
  const { data: petListining = [] } = useQuery({
    queryKey: ["petListining"],
    queryFn: async () => {
      const res = await axiosPublic.get("/petItem");
      return res.data;
    },
  });
  return (
    <div className="mt-24 mb-8 mx-10">
      <div className="text-center space-y-3 mb-8">
        <h2 className="text-4xl font-bold">Find Your Perfect Pet</h2>
        <p className="text-lg max-w-3xl mx-auto text-[#5b6a76]">
          Explore our diverse selection of pets looking for their forever homes.
          Whether you are searching for a playful puppy, a cuddly kitten, or a
          unique exotic pet, our listing page has the perfect companion waiting
          for you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7">
        {petListining.map((list) => (
          <PetList key={list._id} list={list}></PetList>
        ))}
      </div>
    </div>
  );
};

export default PetListining;
