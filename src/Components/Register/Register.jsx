import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const [regError, setRegError] = useState('');
  const [regSuccess,setRegSuccess] = useState('');
  const { createUser } = useContext(AuthContext);
  

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    setRegError('');
    setRegSuccess('');
    if(password.length < 6){
      setRegError('Password Should be at least 6 character or longer')
      return;
    }
    else  if (!/[A-Z]/.test(password)) {
      setRegError('Must Have One UpperCase In Password')
      return ;
    }
    else  if (!/[^A-Za-z0-9]/.test(password)) {
      setRegError('Password Should Have One Special Character')
      return ;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setRegSuccess('SuccessFully You Registered')
      })
      .catch((error) => {
        console.error(error);
        setRegError('Error:You already used this email');
      });
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <p className="py-6">
              Join Us Today: Register for a New Account and Unlock Exciting
              Opportunities
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="text-center pb-6">
              <p>
                Already Have Account?Please Go To{" "}
                <Link className="font-bold text-blue-600 " to="/login">
                  Login
                </Link>
              </p>
              <div>{regError && <p className="text-red-700">{regError}</p>}</div>
              <div>
                {
                  regSuccess && <p className="text-green-600">{regSuccess}</p>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Register;
