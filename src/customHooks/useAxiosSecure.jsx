
import axios from 'axios';


const useAxiosSecure = () => {

  const axiosSecure = axios.create({
    baseURL: 'https://image-uploader-server-side-zgoc.vercel.app', 
  });

  

  return [axiosSecure];
};

export default useAxiosSecure;
