import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
// import { Logo } from "../assets";
const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="relative w-full bg-white shadow-lg">
      <div className="relative flex items-center justify-between py-3 layout">
        <Link to="/">
          <h3 className="uppercase text-primary font-semibold">shamzbridge</h3>
        </Link>

        <div className="items-center hidden   md:flex gap-x-5">
          <NavLink
            to="/all-properties"
            className="text-secondary hover:text-primary font-semibold text-base"
          >
            Home
          </NavLink>
          <NavLink
            to="/all-properties"
            className="text-secondary hover:text-primary font-semibold text-base"
          >
            About us
          </NavLink>
          <NavLink
            to="/agents"
            className="text-secondary hover:text-primary font-semibold text-base"
          >
            Services
          </NavLink>
          {/* <NavLink to="/blog">Blogs</NavLink> */}
        </div>

        <div
          className="block cursor-pointer md:hidden"
          onClick={() => setIsToggle(!isToggle)}
        >
          {isToggle ? (
            <MdOutlineClose size={26} className="text-primary" />
          ) : (
            <MdOutlineMenu size={29} className="text-primary" />
          )}
        </div>
      </div>
      {/* Mobile view */}
      {isToggle && (
        <div className="absolute top-[3.2rem] shadow-xl w-full bg-white h-52">
          <div className="flex flex-col pt-3 text-black layout gap-y-1">
            <Link
              to="/all-properties"
              onClick={() => setIsToggle(!isToggle)}
              className="text-lg "
            >
              About us
            </Link>
            <Link
              to="/agents"
              onClick={() => setIsToggle(!isToggle)}
              className="text-lg"
            >
              Agents
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
