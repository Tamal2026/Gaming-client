
import { FaFacebookF,FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover"> Installation</a> 
    <a className="link link-hover"> Streaming</a> 
    <a className="link link-hover"> Customization</a> 
    <a className="link link-hover"> Support</a>
    <a className="link link-hover"> Tutorials</a>
    <a className="link link-hover"> Accessories</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Find US On</header> 
   <div className='flex gap-2 items-center'>
<FaFacebookF></FaFacebookF>
<p>FaceBook</p>
   </div>
   <div className='flex gap-2 items-center'>
<FaInstagram></FaInstagram>
<p>Instagram</p>
   </div>
   <div className='flex gap-2 items-center'>
<FiTwitter></FiTwitter>
<p>Twitter</p>
   </div>
  </nav> 
  <form>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="email"  className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-red-600">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>


        </div>
    );
};

export default Footer;