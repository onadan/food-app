import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/Auth";
import { Button001, Button002 } from "./Button";

const Navbar = () => {
  const auth = useAuth();
  return (
    <div className="py-4 mb-2 flex justify-between ">
      <div>
        <div className="font-bold text-2xl py-4">Everybite</div>
      </div>

      <nav className="flex p-2">
        <ul className="inline-flex">
          {!auth.user ? (
            <>
              <Link to="/login">
                <li className="">
                  <Button001>Login</Button001>
                </li>
              </Link>
              <Link to="/register">
                <li className="">
                  <Button002>Register</Button002>
                </li>
              </Link>
            </>
          ) : (
            <Link to="/register">
              <li className="">
                <Button002>Dashboard</Button002>
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
