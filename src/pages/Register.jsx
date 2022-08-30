import { Link, useNavigate } from "react-router-dom";
import image from "../assets/images/register-img.jpg";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myFormData = new FormData(e.target);
    const formDataObj = Object.fromEntries(myFormData.entries());
    window.localStorage.setItem("user", JSON.stringify(formDataObj));
    navigate("./login", { replace: true });
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

        <div className="flex flex-col items-center justify-center min-h-screen">
          <header className="font-semibold text-2xl py-8 text-[#00302e]">
            Welcome to Everybite!
          </header>

          <form onSubmit={handleSubmit} className="py-5 flex flex-col">
            <input
              type="text"
              name="firstName"
              className="input-btn"
              placeholder="Your First Name"
              autoFocus
              required
            />

            <input
              type="tel"
              name="phone"
              className="input-btn"
              placeholder="Your Phone Number"
              required
            />

            <input
              type="email"
              name="email"
              className="input-btn"
              placeholder="Your Email"
              required
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
              REGISTER
            </button>
            <Link
              to="/login"
              className="text-center my-4 text-[#00302e] hover:underline"
            >
              Already have an account.{" "}
              <span className="font-semibold">LOGIN</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
