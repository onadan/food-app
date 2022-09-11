import image from "../assets/images/login-img.jpg";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../data/user";
import { useState } from "react";
import { useAuth } from "../context/Auth";

function Login() {
  const navigate = useNavigate();

  const auth = useAuth();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const myFormData = new FormData(e.target);

    const { email, password } = Object.fromEntries(myFormData.entries());

    if (!user) {
      setError("account not found! Create an account")
    }else if (email !== user.email) {
      setError("Incorrect Email");
    } else if (password !== user.password) {
      setError("Incorrect Password");
    } else {
      auth.login(true);
      navigate("../dashboard", { replace: true });
    }
  };

  return (
    <div className="min-h-screen md:max-h-screen overflow-hidden">
      <div className="md:grid md:grid-cols-2">
        <div className="hidden md:block h-screen relative">
          <img
            src={image}
            alt="register"
            className="object-cover h-full w-full"
          />
          <div className="bg-[#E2B88766] absolute top-0 left-0 h-full w-full"></div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen overflow-y-scroll">
          <header className="font-semibold text-2xl py-8 text-[#00302e]">
            Welcome to Everybite!
          </header>

          <form onSubmit={handleSubmit} className="py-5 flex flex-col w-11/12">
            <input
              type="email"
              name="email"
              className="input-btn"
              placeholder="Your Email Address"
              required
              autoFocus
            />

            <input
              type="password"
              name="password"
              className="input-btn"
              placeholder="Your Password"
              minLength={6}
              required
              autoComplete="true"
            />

            <p className="p-2 text-red-500 mx-auto"> {error}</p>

            <button
              type="submit"
              className="font-[500] w-full cursor bg-[#00302e] text-white p-3 px-4 rounded-lg mx-2  my-4"
              required
            >
              LOGIN
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:justify-between text-[#00302e] flex-wrap w-full">
              <div className="mb-2">
                {" "}
                <Link to="/register">Create an account</Link>
              </div>
              <div>Forget Password</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
