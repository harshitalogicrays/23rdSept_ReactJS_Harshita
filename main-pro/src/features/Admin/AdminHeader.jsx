import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout_user } from "../../redux/userSlice";

const AdminHeader = () => {
  const redirect = useNavigate()
  const dispatch = useDispatch()
  const handleLogout=()=>{
    // if(sessionStorage.getItem('23rdsept') != null){
    //   sessionStorage.removeItem('23rdsept')
      dispatch(logout_user())
      toast.success("loggedOut Successfully")
      redirect('/')
    // }
  }
    return (
      <header className="flex items-center justify-between h-16 bg-gray-100 px-6 shadow-md">
        <h1 className="text-xl font-semibold">Welcome to the Admin Panel</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Admin</span>
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
    );
  };
  
  export default AdminHeader;
  