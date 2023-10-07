
import { useEffect, useState } from "react";
import LeftNavCard from "./LeftNavCard";

const LeftNavbar = () => {
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
  commingEvents?.map(event =><LeftNavCard key={event.id}event={event}></LeftNavCard>)
}
        </div>
    );
};

export default LeftNavbar;