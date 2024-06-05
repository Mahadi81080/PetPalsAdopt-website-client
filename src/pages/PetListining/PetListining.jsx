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
    <div className="mt-24 mx-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {petListining.map((list) => (
          <PetList key={list._id} list={list}></PetList>
        ))}
      </div>
    </div>
  );
};

export default PetListining;
