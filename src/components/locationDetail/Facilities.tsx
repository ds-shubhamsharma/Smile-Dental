import * as React from "react";
import facilities from "../../images/facilities.png";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect } from "react";

type data = {
  c_dentalAccreditedPhpto: any;
  c_dentalAccreditedTitle: any;
  c_dentalAccreditedPara: any;
};

const Facilities = (data: any) => {
  const {
    c_dentalAccreditedPhpto,
    c_dentalAccreditedTitle,
    c_dentalAccreditedPara,
  } = data;

  return (
    <>
      <div className="h-[32rem] mt-32 ">
        <img
          src={c_dentalAccreditedPhpto?.url}
          width="200px"
          height="96px"
          className="ml-[400px]"
          alt=""
        />

        <div className="text-center pt-4">
          <h3 className=" text-[48px] text-[#10365B] font-extrabold ">
            {c_dentalAccreditedTitle}
          </h3>
        </div>
        <div className="flex py-5 break-normal">
          <p className="text-[20px]">{c_dentalAccreditedPara}</p>
        </div>
      </div>
    </>
  );
};
export default Facilities;
