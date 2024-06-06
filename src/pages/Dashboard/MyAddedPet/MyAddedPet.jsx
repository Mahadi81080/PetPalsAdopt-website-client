import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const MyAddedPet = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: petLists = [], refetch } = useQuery({
    queryKey: ["petLists"],
    queryFn: async () => {
      const res = await axiosSecure.get("/petItem");
      return res.data;
    },
  });

  const currentUserEmail = user.email;
  const currentList = petLists.filter(
    (item) => item.email === currentUserEmail
  );
  console.log(currentList);
  const handleMakeAdopt = (item) => {
    axiosSecure.patch(`/petAdopt/${item._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${item.name} pet is Adopted !`);
      }
    });
  };
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/petItem/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const getStatusStyle = (adopted) => {
    return {
      color: adopted ? "blue" : "red",
      fontWeight: "bold",
    };
  };
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
              <th>Image</th>
              <th>NAME</th>
              <th>CATEGORY</th>
              <th>STATUS</th>
              <th>UPDATE</th>
              <th>DELETE</th>
              <th>ADOPT</th>
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
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td style={getStatusStyle(item.adopted)}>
                  {item.adopted ? "Adopted" : "Not Adopted"}
                </td>
                <td>
                  <Link to={`/dashboard/update/${item._id}`}>
                    {" "}
                    <button className="bg-blue-300 text-white px-2 py-1 rounded-md">
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleMakeAdopt(item)}
                    className={
                      item.adopted
                        ? "disabled bg-gray-400 px-2 py-1 rounded-md text-white"
                        : "bg-blue-300 text-white px-2 py-1 rounded-md"
                    }
                  >
                    {" "}
                    {item.adopted === true ? "Adopted" : "Adopt"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="bg-red-300 text-white px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MyAddedPet;
