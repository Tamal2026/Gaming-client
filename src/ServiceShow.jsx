/* eslint-disable react/prop-types */

const ServiceShow = ({ service }) => {
  const { name, image, price, title, additionalFeatures, details } = service || {};
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image}   className="max-w-[400px] max-h-[200px] lg:max-w-[700px] lg:max-h-[800px] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-2xl lg:text-5xl font-bold bg-green-600 text-white rounded-lg py-3 pl-4">{name}</h1>
            <p className="py-2 pl-3  mt-5 bg-blue-700 font-semibold text-white rounded-lg"> Title : {title}</p>
            <p className="py-2 pr-14 bg-fuchsia-600 font-bold text-white my-4 pl-4 rounded-lg">{details}</p>
            <div>
              {/* Excluding 'id' from the display */}
              <h1 className="bg-red-600 py-2 text-white font-semibold rounded-lg pl-3">Additional Features : {additionalFeatures}</h1>
            </div>
            <p className="bg-sky-700 text-white font-bold w-1/3 rounded-lg pl-4 mt-4 py-2">Price : {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceShow;
