import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center rounded-lg shadow-lg mx-4 md:max-w-md md:mx-auto mt-[4rem] mb-[6rem]">
      <div className="bg-primary py-[1rem] rounded-t-lg w-full">
        <h1 className="text-center text-xl md:text-2xl font-bold text-white">Welcome {user.displayName}!</h1>
      </div>
      <div className='flex my-8 w-[80%] gap-6'>
        {
          user && user.photoURL ?
          <div
          className="w-24 h-24 rounded-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${ user.photoURL })`,
          }}
          ></div>
          :
          <div
          className="w-24 h-24 rounded-full bg-cover bg-center"
          style={{
            backgroundImage: "url(pfp-fallback.jpg)",
          }}
          ></div>

        }
        <div className='mt-2'>
            <h2 className="text-xl font-bold text-gray-800">{user.displayName || "User Name"}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>
      <button className='px-4 py-2 font-bold w-[90%] text-white text-lg bg-primary rounded-lg my-3 mb-8 transition-all hover:bg-[#46691c] duration-300'><Link to={'/update-profile'}>Update Profile</Link></button>
    </div>
  );
};

export default UserProfile;
