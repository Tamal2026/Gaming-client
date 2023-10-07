import { useEffect, useState } from "react";
import RightNavCard from "./RightNavCard";


const RightNavbar = () => {
const [featured,setFeatured] = useState();
  useEffect(() => {
    fetch("featured.json")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);
    return (
        <div className="sticky top-4">
           <h1 className="text-3xl font-semibold bg-sky-700 text-white rounded-lg pl-2  text-center py-2">Featured Games</h1>
          {
            featured?.map(feature =><RightNavCard key={feature.id} feature={feature}></RightNavCard>)
          }
        </div>
    );
};

export default RightNavbar;
