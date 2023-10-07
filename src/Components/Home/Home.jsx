import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import LeftNavbar from "../LeftNavbar";
import RightNavbar from "../RightNavbar";


const Home = () => {
 
 
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap">
            <div className="col-span-1">
<LeftNavbar></LeftNavbar>
            </div>
         <div className="col-span-3">
         <Banner></Banner>
         <Services ></Services>
         </div>

         <div className="col-span-1">
<RightNavbar></RightNavbar>
         </div>
            
            
           
        </div>
    );
};

export default Home;