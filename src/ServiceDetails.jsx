import { useParams } from "react-router-dom";


const ServiceDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <p>{id}</p>
        </div>
    );
};

export default ServiceDetails;