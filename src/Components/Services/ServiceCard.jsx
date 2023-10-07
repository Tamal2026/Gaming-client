/* eslint-disable react/prop-types */
const ServiceCard = ({service}) => {
const {name,image,price} = service;


    return (
        <div>
   <div className="card w-96  bg-base-100 shadow-xl">
    <p>{name}</p>
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{price}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">See Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;