import { useNavigate } from "react-router-dom";
import { Button003 } from "../components/Button";

function Production() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#00302E] text-white overflow-hidden w-screen h-screen flex justify-center items-center">
      <div className="px-4">
        <h1 className="text-2xl font-bold">OOPS!</h1>
        <p className="font-medium">This page is not available right now!</p>
        <div className="my-4" onClick={() => navigate("/", { replace: true })}>
          <Button003> Go to home</Button003>
        </div>
      </div>
    </div>
  );
}

export default Production;
