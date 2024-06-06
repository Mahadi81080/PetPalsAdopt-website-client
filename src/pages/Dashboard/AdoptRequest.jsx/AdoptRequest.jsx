import { useQuery } from "@tanstack/react-query";
 
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AdoptRequest = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: adoptRequestList = [] } = useQuery({
    queryKey: ["adoptRequestList"],
    queryFn: async () => {
      const res = await axiosSecure.get("/petAdopt");
      return res.data;
    },
  });
  console.log(adoptRequestList);
  const { data: petListining = [] } = useQuery({
    queryKey: ["petListining"],
    queryFn: async () => {
      const res = await axiosSecure.get("/petItem");
      return res.data;
    },
  });
  console.log(petListining);
  const currentList = adoptRequestList.filter((request) =>
    petListining.some((pet) => pet._id === request.petId)
  );
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-2xl">All Pet</h2>
        <h2 className="text-2xl">Total Pets: {currentList.length}</h2>
      </div>
      <div className="overflow-x-auto my-5 rounded-t-xl">
        <table className="table">
          {/* head */}
          <thead className="bg-[#3498db]">
            <tr>
              <th>#</th>
              <th>Pet Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Location</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {currentList.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.userName}</td>
                <td>{item.email}</td>

                <td>{item.phoneNumber}</td>
                <td>{item.address}</td>
                <td>
                  <button className="bg-blue-300 text-white px-2 py-1 rounded-md">
                    Accept
                  </button>
                </td>
                <td>
                  <button className="bg-blue-300 text-white px-2 py-1 rounded-md">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdoptRequest;
