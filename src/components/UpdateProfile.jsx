import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { BiX, BiEdit } from 'react-icons/bi';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [editname, setEditName] = useState(false);
  const [editphoto, setPhoto] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target); // Using FormData for better form handling

    let displayName = formData.get("name"); // Get value from the 'name' field
    let photoURL = formData.get("photo"); 
    if (!displayName) {
      displayName = user.displayName
    }
    else if(!photoURL){
      photoURL = user.photoURL
    }
  

    try {
      await updateProfile(user, {
        displayName,
        photoURL,
      });

      setLoading(false);
      toast.success(`Login successful! Welcome back!`, {
        position: "top-center",
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } catch (error) {
      console.error("Profile update failed:", error);
      setLoading(false);
      toast.error(`Porfile update failed: ${errorMessage}`, {
        position: "top-center",
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <div>
            <div className="max-w-[40rem] md:mx-auto shadow-xl rounded-xl text-center mx-3 mb-16">
              <div className="bg-primary py-[1rem] rounded-t-lg">
                <h1 className="text-center text-2xl font-bold text-white">Update Profile</h1>
              </div>
            <form onSubmit={handleSubmit} className="flex flex-col max-w-[90%] items-start mx-auto my-8 gap-4">
               <div className="flex relative w-full">
                {
                  editname ?
                  <div className='w-full flex items-center gap-2'>
                    <div className='flex gap-3 justify-center w-full'>
                      <span className='text-primary text-lg'>Username:</span>
                      <input className="border-2 border-primary text-lg rounded-md p-1 w-full " type='text' placeholder="Username" name="name" defaultValue={user?.displayName}/>
                    </div>
                    <BiX className='text-2xl font-bold mr-3 cursor-pointer text-primary'  onClick={() => {setEditName(!editname)}}></BiX>
                  </div>
                  :
                  <div className='flex justify-between items-center w-full  py-2 '>
                    <div className='flex gap-3'>
                      <span className='text-primary text-lg'>Username:</span>
                      <h1 className='text-lg w-full'>{user?.displayName}</h1>
                    </div>
                    <BiEdit className='text-xl mr-3 cursor-pointer text-primary' onClick={() => {setEditName(!editname)}}></BiEdit>
                  </div>
                  // 
                }
                
               </div>
               <div className="flex relative w-full">
                {
                  editphoto ?
                  <div className='w-full flex items-center gap-2'>
                    <div className='flex gap-3 justify-center w-full items-center'>
                      <span className='text-primary text-lg block whitespace-nowrap'>Photo URL:</span>
                      <input className="border-2 border-primary text-lg rounded-md p-1 w-full" type='text' placeholder="Photo URL" defaultValue={user?.photoURL} name="photo"/>
                    </div>
                    
                    <BiX className='text-2xl font-bold mr-3 cursor-pointer text-primary'  onClick={() => {setPhoto(!editphoto)}}></BiX>
                  </div>
                  :
                  <div className='flex justify-between items-center w-full  py-2'>
                    <div className='flex gap-3'>
                      <span className='text-primary text-lg'>Photo URL:</span>
                      <h1 className='text-lg whitespace-nowrap overflow-hidden'>{user?.photoURL}</h1>
                    </div>
                    
                    <BiEdit className='text-xl mr-3 ml-4 cursor-pointer text-primary' onClick={() => {setPhoto(!editphoto)}}></BiEdit>
                  </div>
                }
                
               </div>
                <input type="submit" value="Update Profile" className="text-lg bg-primary py-2 text-white rounded-lg shadow-md w-full hover:bg-[#5e8b26] font-bold mt-3 mb-8 transition-all duration-300 cursor-pointer"/>
            </form>
            </div>
        </div>
  );
};

export default UpdateProfile;
