import { useContext, useEffect, useState } from "react";
import RightNavCard from "./RightNavCard";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";


const RightNavbar = () => {
  const {user} = useContext(AuthContext)
const [featured,setFeatured] = useState();
  useEffect(() => {
    fetch("featured.json")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);
    return (
        <div className="sticky top-4">
           <h1 className="text-3xl font-semibold bg-sky-700 text-white rounded-lg pl-2  text-center py-2">Featured Games</h1>
          { user ?
            featured?.map(feature =><RightNavCard key={feature.id} feature={feature}></RightNavCard>) 
           : <div className="text-center ">
  <Link to="/login"> <p className="bg-lime-800 w-1/3 mx-auto text-white font-semibold text-center mt-52  px-2 py-1 rounded-lg"> Login</p>
  <p className="mt-5">For See All Upcoming Events</p> </Link> </div>


  
          }
        </div>
    );
};

export default RightNavbar;
