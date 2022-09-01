import image from "../assets/images/login-img.jpg";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("../dashboard");
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

          <form onSubmit={handleSubmit} className="py-5 flex flex-col w-2/3">
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

            <button
              type="submit"
              className="font-[500] w-full cursor bg-[#00302e] text-white p-3 px-4 rounded-lg mx-2  my-4"
              required
            >
              LOGIN
            </button>
          </form>
          <div className="flex justify-between w-2/3 text-[#00302e]">
            <div>Create an account</div>
            <div>Forget Password</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
