import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin,facebookLogin } = useAuth();
  //   const axiosPublic = useAxiosPublic()
  const navigate = useNavigate();
  const handleGoogleSingin = () => {
    googleLogin().then((result) => {
      console.log(result.user);
      navigate("/");
        const userInfo = {
          email: result.user.email,
          name: result.user.displayName,
        };
        axios.post(`${import.meta.env.VITE_API_URL}/users`,userInfo)
        .then(res=>{
          console.log(res.data);
          navigate('/')
        })
    });
  };
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={handleGoogleSingin}
        aria-label="Log in with Google"
        className="p-3 rounded-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-5 h-5 fill-current"
        >
          <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
        </svg>
      </button>
      <button
        onClick={() => facebookLogin()}
        aria-label="Log in with Facebook"
        className="p-3 rounded-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="27"
          height="30"
          viewBox="0 0 50 50"
        >
          <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
        </svg>
      </button>
    </div>
  );
};

export default SocialLogin;
