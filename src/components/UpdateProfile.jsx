import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { BiX, BiEdit } from 'react-icons/bi';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [editname, setEditName] = useState(false);
  const [editphoto, setPhoto] = useState(false)
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target); 

    let displayName = formData.get("name");
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
      navigate('/my-profile')
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
      toast.error(`Porfile update failed: ${error.errorMessage}`, {
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
            <div className="max-w-[40rem] md:mx-auto shadow-xl rounded-xl text-center mx-3 my-16">
              <div className="bg-primary py-[1rem] rounded-t-lg">
                <h1 className="text-center text-2xl font-bold text-white">Update Profile</h1>
              </div>
            <form onSubmit={handleSubmit} className="flex flex-col max-w-[90%] items-start mx-auto my-8 gap-4">
               <div className="flex relative w-full">
                {
                  editname ?
                  <div className='w-full flex items-center gap-2'>
                    <div className='flex flex-col gap-3 justify-center w-full'>
                      <div className="flex gap-4 items-center">
                        <span className='text-primary md:text-lg'>Username:</span>
                        <BiX className='md:hidden text-2xl font-bold mr-3 cursor-pointer text-primary'  onClick={() => {setEditName(!editname)}}></BiX>
                      </div>
                      <input className="border-2 border-primary md:text-lg rounded-md p-1 w-full " type='text' placeholder="Username" name="name" defaultValue={user?.displayName}/>
                    </div>
                    <BiX className='md:inline-block hidden text-2xl font-bold mr-3 cursor-pointer text-primary'  onClick={() => {setEditName(!editname)}}></BiX>
                  </div>
                  :
                  <div className='flex justify-between items-center w-full py-2 '>
                    <div className='flex gap-3 flex-col items-start'>
                      <div className="flex gap-4 items-center">
                        <span className='text-primary md:text-lg'>Username:</span>
                        <BiEdit className='md:hidden text-xl mr-3 cursor-pointer text-primary' onClick={() => {setEditName(!editname)}}></BiEdit>
                      </div>
                      <h1 className='md:text-lg w-full'>{user?.displayName}</h1>
                    </div>
                    <BiEdit className='md:inline-block hidden text-xl mr-3 cursor-pointer text-primary' onClick={() => {setEditName(!editname)}}></BiEdit>
                  </div>
                  // 
                }
                
               </div>
               <div className="flex relative w-full">
                {
                  editphoto ?
                  <div className='w-full flex items-center gap-2'>
                    <div className='flex md:gap-3 justify-center w-full flex-col items-start'>
                      <div className="flex gap-4 items-center">
                        <span className='text-primary md:text-lg block whitespace-nowrap'>Photo URL:</span>
                        <BiX className='md:hidden text-2xl font-bold mr-3 cursor-pointer text-primary'  onClick={() => {setPhoto(!editphoto)}}></BiX>
                      </div>
                      <input className="border-2 border-primary md:text-lg rounded-md p-1 w-full" type='text' placeholder="Photo URL" defaultValue={user?.photoURL} name="photo"/>
                    </div>
                    
                    <BiX className='md:inline-block hidden text-2xl font-bold mr-3 cursor-pointer text-primary'  onClick={() => {setPhoto(!editphoto)}}></BiX>
                  </div>
                  :
                  <div className='flex justify-between items-start w-full py-2'>
                    <div className='flex gap-3 flex-col items-start w-[90%]'>
                      <div className="flex gap-4 items-center">
                        <span className='text-primary md:text-lg'>Photo URL:</span>
                        <BiEdit className='md:hidden text-xl mr-3 md:ml-4 cursor-pointer text-primary' onClick={() => {setPhoto(!editphoto)}}></BiEdit>
                      </div>
                      <h1 className='md:text-lg overflow-hidden'>{user?.photoURL}</h1>
                    </div>
                    
                    <BiEdit className='md:inline-block hidden text-xl mr-3 ml-4 cursor-pointer text-primary' onClick={() => {setPhoto(!editphoto)}}></BiEdit>
                  </div>
                }
                
               </div>
                <input type="submit" value={`${loading ? 'Updating Profile...' : 'Update Profile'}`} className="text-lg bg-primary py-2 text-white rounded-lg shadow-md w-full hover:bg-[#5e8b26] font-bold mt-3 mb-8 transition-all duration-300 cursor-pointer"/>
            </form>
            </div>
        </div>
  );
};

export default UpdateProfile;
