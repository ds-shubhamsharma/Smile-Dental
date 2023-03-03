import { Link } from "@yext/pages/components";
import * as React from "react";


type data={
    c_specialDentistsH1:any;
    c_specialDentalService:any;
  }
  
  
  const DentalSpecial = (data: any) => {
    const{c_specialDentistsH1,c_specialDentalService}=data;
  
    return (
      <>
        
          <div className="text-center pt-2 mt-6">
          <h3 className=" text-[48px] text-[#10365B] font-extrabold ">
            {c_specialDentistsH1}
          </h3>
        </div>      
        <div className="bg-[#255ec1] ">      
        <div className="solution-inner ">

          {c_specialDentalService?.map((e: any) => (
            <>
              <div className="sol-card">
                {/* <img src={e.pic.url} alt="" className="" /> */}
                <h3 className="text-white" style={{color:"white"}}>{e.specialDentalName}</h3>
                <h3 className="text-white"style={{color:"white"}}>{e.specialDentalPara}</h3>
                  {/* {" "}
                  <Link
                    className="font-medium py-1 px-8 text-[15px]"
                    href="#"
                    style={{ fontFamily: "Roboto" }}
                  >
                    {e.button.label}
                  </Link> */}
              </div>
            </>
          ))}
        </div>
        </div>
      
      </>
    );
  };
  export default DentalSpecial;