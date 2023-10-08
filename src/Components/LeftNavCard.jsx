

/* eslint-disable react/prop-types */
const LeftNavCard = ({ event }) => {
    const { name, img ,eventDate,platform,rating} = event || {};
    
  
  
    return (
      <div>
          <div className="card mx-6 card-side bg-base-100 mb-5 shadow-2xl">
  <figure><img src={img} alt="Movie"className="h-[120px] w-[500px]"/></figure>
  <div className="card-body">
a

    <div className="card-actions justify-end">
    <p className="">Event Date: {eventDate}</p>
        <div>
        <p className="font-bold bg-gray-700 text-white rounded-lg pl-2 my-2">PlatForm : {platform}</p>
    </div>
<p className="font-semibold bg-fuchsia-700 text-white  py-1 rounded-lg pl-2">Rating : {rating}</p>
    </div>
    
  </div>
</div>
      </div>
    );
  };
  
  export default LeftNavCard;
  