import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      console.log("You have been signed out successfully");
      navigate("/signin");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1 className="text-9xl font-rubik">
        Welcome, {auth.currentUser?.email}
      </h1>
      <button
        onClick={handleSignOut}
        className="w-full rounded-lg mt-24 py-6 block font-medium text-3xl text-white bg-teal-700"
      >
        Sign Out
      </button>
    </div>
  );
}
export default Home;