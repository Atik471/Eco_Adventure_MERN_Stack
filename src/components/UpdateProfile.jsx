import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { BiEdit } from 'react-icons/bi';

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [editname, setEditName] = useState(false);
  const [editphoto, setPhoto] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateProfile(user, {
        displayName: user.displayName,
      });

      setLoading(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error("Profile update failed:", error);
      setLoading(false);
      alert('Error updating profile');
    }
  };

  return (
    <div>
            <div className="max-w-[30rem] md:mx-auto shadow-xl rounded-xl text-center mx-3">
              <div className="bg-primary py-[1rem] rounded-t-lg">
                <h1 className="text-center text-2xl font-bold text-white">Update Profile</h1>
              </div>
            <form onSubmit={handleSubmit} className="flex flex-col max-w-[80%] items-start mx-auto my-8 gap-4">
               <div className="flex relative w-full">
                {
                  editname ?
                  <div className='w-full'>
                    <input className="bg-yellow-100 py-2 pl-2 border-b-2 border-primary w-full focus:outline-none" type='text' placeholder="Username" name="text" defaultValue={user?.displayName}/>
                  </div>
                  :
                  <div className='flex justify-between items-center w-full  py-2 pl-2 border-b-2 border-primary'>
                    <h1 className='text-lg'>Username: {user?.displayName}</h1>
                    <BiEdit className='text-lg mr-3 cursor-pointer' onClick={() => {setEditName(!editname)}}></BiEdit>
                  </div>
                  // 
                }
                
               </div>
               <div className="flex relative w-full">
                {
                  editphoto ?
                  <div className='w-full'>
                    <input className="bg-yellow-100 py-2 pl-2 border-b-2 border-primary w-full focus:outline-none" type='text' placeholder="Photo URL" defaultValue={user?.photoURL} name="text"/>
                  </div>
                  :
                  <div className='flex justify-between items-center w-full  py-2 pl-2 border-b-2 border-primary'>
                    <h1 className='text-lg whitespace-nowrap overflow-hidden'>Photo URL: {user?.photoURL}</h1>
                    <BiEdit className='text-2xl mr-3 ml-4 cursor-pointer' onClick={() => {setPhoto(!editphoto)}}></BiEdit>
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
