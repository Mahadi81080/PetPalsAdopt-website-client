import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Components/useAdmin';

 const AdminRoute = ({children}) => {
  const {user,loading}= useAuth()
  const [isAdmin,isAdminLoading]=useAdmin()
  const location=useLocation()
  if (loading || isAdminLoading) {
      return (
        <div className="w-16 h-16 mx-auto mt-30 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
      );
    }
  if(user && isAdmin){
      return children
  }
  return (
      <Navigate to='/' state={{from:location}} replace></Navigate>
  );
 };
 
 export default AdminRoute;