import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate,  } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const {user} = useContext(AuthContext)
  const [logError, setlogError] = useState('');
  const [logSuccess,setLogSuccess] = useState('');
const {signIn} = useContext(AuthContext);

const location = useLocation();
console.log(location);
const naviGate = useNavigate();

  const handleLogin = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name,email,password);
    setLogSuccess('');
setlogError('');

    signIn(email,password)
    .then((result =>{
      console.log(result.user);

      setLogSuccess('logged in SucccessFully')
      naviGate(location?.state ? location.state:'/')
      
    }))
    .catch((error =>{
      console.error(error);
    setlogError('Your Email and password is not correct')
    }))
}

if (user){
  return <Navigate to='/'></Navigate>
}

  return (
    <div className="hero min-h-screen bg-base-200">
      <div>
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login Now!</h1>
          <p className="py-6">
            Secure Access: Log In to Your Account for a Personalized Experience
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center mb-6">
            <p>
              New Here ? Please Go To{" "}
              <Link className="font-bold text-green-600" to="/register">
                Register
              </Link>
            </p>
            {
             logError && <p className="text-red-700">{logError}</p>
            }{
              logSuccess && <p className="text-green-600">{logSuccess}</p>
            }
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
