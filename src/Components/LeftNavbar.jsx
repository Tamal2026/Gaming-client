
import { useContext, useEffect, useState } from "react";
import LeftNavCard from "./LeftNavCard";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
 const {user} = useContext(AuthContext);

  const [commingEvents,setCommingEvent] = useState();
  useEffect(() => {
    fetch("upcomming.json")
      .then((res) => res.json())
      .then((data) => setCommingEvent(data));
  }, []);
    return (
        <div className="sticky top-4">
      <h1 className="text-3xl font-semibold bg-lime-600 text-white rounded-lg pl-2 py-2">Upcomming Events</h1>
{
  user ?
    commingEvents?.map(event =><LeftNavCard key={event.id}event={event}></LeftNavCard>)
  : <div className="text-center ">
  <Link to="/login"> <p className="bg-red-600 w-1/3 mx-auto text-white font-semibold text-center mt-52  px-2 py-1 rounded-lg"> Login</p>
  <p className="mt-5">For See All Upcoming Events</p> </Link> 
  
  </div>
}
        </div>
    );
};

export default LeftNavbar;