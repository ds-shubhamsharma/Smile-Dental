import * as React from "react";

type props = {
  c_servicesItem: any;
  c_servicetitle: any;
  c_servicesCta: any;
};
const Services = (props: any) => {
  const { c_servicesItem, c_servicetitle, c_servicesCta } = props;
  // console.log("c_servicesItem", c_servicesItem);

  return (
    <>
      <>
        <div className="h-[36.5rem] mt-[150px] bg-[#7ca2db]">
          <div className="text-center pt-24">
            <h1 className=" text-[48px] text-[#10365B] font-extrabold ">
              {c_servicetitle}
            </h1>
          </div>
          <div className=" grid grid-cols-4 gap-y-8 mt-[70px] ml-[200px]">
          {c_servicesItem?.map((Data: any) => {
            return (
              <>
                <div className="w-[17.438rem] h-[12.625rem]">
                  <img
                    src={Data.serviceImage.url}
                    alt=""
                    className="w-20 h-20"
                  />
                  <h2 className="text-white font-medium">{Data.serviceName}</h2>
                  </div>
              </>
            );
          })}</div>
           {/* <div className="view-service  ">
          <a href="#" className="rounded-full">
            {c_servicesCta.label}
          </a>
        </div> */}
        </div>
       
      </>
    </>
  );
};

export default Services;
