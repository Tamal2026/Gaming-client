import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServiceCard = ({service}) => {
const {name,image,title,id} = service;


    return (
        <div className="mt-10 ">
   <div className="card w-96  shadow-2xl">
    
  <figure><img src={image} alt="Shoes" className="w-full h-[250px] object-cover rounded-t-lg" /></figure>
  <div className="card-body">
  <p className=" bg-teal-600 text-white font-semibold rounded-lg w1/2 pl-2 py-2">{name}</p>
    <p>{title}</p>
    <div className="card-actions justify-end">
      <div>
      <Link to={`/service/${id}`}>  <button className="btn btn-primary">See Details</button> </Link>
      </div>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;