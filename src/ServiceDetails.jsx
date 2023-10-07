/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceShow from "./ServiceShow";


const ServiceDetails = () => {
    const [sevice ,setService] = useState();
    const {id} = useParams();
    const Data = useLoaderData();
    useEffect(()=>{
        const findService = Data?.find(service => service.id ==id)
        setService(findService)
    },[id,Data])
    console.log(Data);
    return (
        <div>
            <p>{id}</p>
            <ServiceShow service={sevice}></ServiceShow>
        </div>
    );
};

export default ServiceDetails;