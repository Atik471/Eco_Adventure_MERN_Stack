import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center space-x-6 p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto mt-10">
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
      
      {
        user != null ?
        <div>
            <h2 className="text-xl font-bold text-gray-800">{user.displayName || "User Name"}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      :
        <div></div>
      }
    </div>
  );
};

export default UserProfile;
