/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setSevices] = useState();

  useEffect(() => {
    fetch("info.json")
      .then((res) => res.json())
      .then((data) => setSevices(data));
  }, []);

  return (
    <>
      <div className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg text-center w-1/3 mx-auto mt-5">
        Our SerVices
      </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
    {
        services?.map(service =><ServiceCard key={service.id} service={service}></ServiceCard>)
    }
  
   </div>
    </>
  );
};

export default Services;
