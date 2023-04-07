import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation flex pt-6 justify-between mx-10">
        <div className="flex gap-12">
          <div>
            <img className="cursor-pointer w-8 h-8" src="./menu.svg" alt="" />
          </div>
          <div className="mt-1">
            <NavLink to="/">
              <img src="./Folklore-Logo.svg" alt="" />
            </NavLink>
          </div>
        </div>
        <NavLink className="touch flex relative" to="/touch">
          <div className="rond absolute right-20 z-20 w-12 h-12">
            <div className="bgc-rond w-12 h-12"></div>
          </div>
          <p className="relative top-3 right-4 z-40">Get in touch</p>
        </NavLink>
      </div>
      <div className="flex pt-40 justify-between">
        <h1 className="titre w-1/2 text-9xl ml-20 mt-20">
          From first cheque to forever
        </h1>
        <img
          className="w-1/2 image"
          src="./img-folklore-loop-main-01_2x-removebg-preview.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Navigation;
