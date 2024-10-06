import { Button } from "antd";
import React from "react";
import { FaPlane } from "react-icons/fa";
import { IoBedSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <section>
      <nav className="flex justify-between items-center py-2 px-3">
        {/* {category} */}
        <ul className="flex justify-center items-center gap-4">
          <li className="flex items-center justify-center gap-2">
            <span>
              <FaPlane className="text-white mx-2" />
            </span>
            <span className="text-white">Find Flight</span>
          </li>
          <li className="flex items-center justify-center gap-2">
            <IoBedSharp className="text-white" />
            <span className="text-white">Find Stay</span>
          </li>
        </ul>

        {/* {Logo} */}

        <ul>
          <li>Globe</li>
        </ul>

        {/* auth */}

        <ul className="flex justify-center items-center gap-4">
          <li>
            {" "}
            <Button className="text-black bg-transparent">Login</Button>{" "}
          </li>
          <li>
            {" "}
            <Button type="primary" className="me-3">
              Signup
            </Button>{" "}
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
