import { useNavigate } from "react-router-dom";
import { Button003 } from "../components/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#00302E] text-white overflow-hidden w-screen h-screen flex justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold">OOPS! - Error 404</h1>
        <p className="font-medium">Page Not Found!</p>
        <div className="my-4" onClick={() => navigate(-1)}>
          <Button003> Go back</Button003>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
