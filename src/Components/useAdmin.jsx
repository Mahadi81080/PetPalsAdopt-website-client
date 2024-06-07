import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";


const useAdmin = () => {
 const {user,loading}=useAuth()
  const [axiosSecure]=useAxiosSecure()
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/users/admin/${user.email}`);
        return res.data?.admin;
      }
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
