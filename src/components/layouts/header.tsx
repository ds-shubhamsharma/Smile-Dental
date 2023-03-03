import { Link } from "@yext/pages/components";
import * as React from "react";
import { useEffect } from "react";

type props = {
  image: any;
  navigate: any;
  c_socialButton: any;
};

const Header = (headerItem: props) => {
  // console.log("headerItem", headerItem);
  useEffect(() => {});

  return (
    <>
      {/* <div className=" inline-block w-full "> 
         <div className="centered-container px-6 pt-6 "> */}
      <nav className="py-6 flex items-center justify-between bg-white">
        <div className="flex gap-12">
          <a href="#">
            {" "}
            <img
              className="w-[75PX] h-[75px] ml-12"
              src={headerItem.image.url}
              alt=""
            />
          </a>

          <div className="flex gap-x-8 items-center ml-2 font-medium">
            {headerItem?.navigate?.map((links: any) => {
              return (
                <div className="flex gap-7 text-sm  text-body text-[#37587b] text-[20px] font-medium">
                  <a href="#"> {links.label}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-x-4 h-24 mr-5 ">
          <div className="view-mores  ">
            <a href="/" className="rounded-full">
              {" "}
              {headerItem.c_socialButton.label}{" "}
            </a>
          </div>
        </div>
      </nav>
      {/* </div>
      </div> */}
    </>
  );
};

export default Header;
