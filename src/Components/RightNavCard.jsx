/* eslint-disable react/prop-types */


const RightNavCard = ({feature}) => {
    const {title,image,rating,releaseDate,platforms,price} = feature || {};
    return (
        <div>
            
            <div >
            <div className="mx-auto mt-4 w-5/6 ">
           
           </div>
           <div className="card mx-6 card-side bg-base-100 mb-5 shadow-2xl">
  <figure><img src={image} alt="Movie"className="h-[120px] w-[500px]"/></figure>
  <div className="card-body">
    <h2 className="card-title bg-blue-600 font-bold text-white rounded-lg px-2">{title}</h2>
    <p className="">Relase Date : {releaseDate}</p>
    <div className="card-actions justify-end">
        <div>
            <p className="bg-green-700 font-semibold rounded-lg text-white pl-2">Price : {price}</p>
        </div>
        <div>
        <p className="font-bold bg-gray-700 text-white rounded-lg pl-2 my-2">PlatForm : {platforms}</p>
    </div>
<p className="font-semibold bg-red-600 text-white  py-1 rounded-lg pl-2">Rating : {rating}</p>
    </div>
    
  </div>
</div>
   

        </div>
        </div>
    );
};

export default RightNavCard;