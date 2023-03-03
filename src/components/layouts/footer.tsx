import * as React from "react";
function moveTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const Footer = (footerData: any) => {
  return (
    <>
      <footer className="footer-1 py-8 sm:py-12 bg-[#255ec1]">
        <div className="container mx-auto px-4 text-white text-[16px]">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <img src={footerData.c_footerLogo.url} alt="" />
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              {/* <h5 className="text-xl font-bold mb-6"></h5> */}
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                   </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                   
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
               
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
              
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
               
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 className="text-xl mb-6 text-[18px]">
                {footerData.footerData.locationsTitle}
              </h5>
              <hr />
              {footerData?.footerData?.locationsLabel?.map((location: any) => {
                return (
                  <>
                    <ul className="list-none footer-links m-3">
                      <li className="mb-2">
                        <a
                          href="#"
                          className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                        >
                          {location.label}
                        </a>
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl  mb-6 text-[18px]">
                {footerData.footerData.servicesTitle}
              </h5>
              <hr />
              {footerData?.footerData?.servicesLabel?.map((services: any) => {
                return (
                  <>
                    <ul className="list-none footer-links">
                      <li className="mb-2">
                        <a
                          href="#"
                          className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                        >
                          {services.label}
                        </a>
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl  mb-6 text-[18px]">
                {footerData.footerData.careers}
              </h5>
              <hr />
              {footerData?.footerData?.careersLabel?.map((career: any) => {
                return (
                  <>
                    <ul className="list-none footer-links">
                      <li className="mb-2">
                        <a
                          href="#"
                          className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                        >
                          {career.label}
                        </a>
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 className="text-xl  mb-6 sm:text-center xl:text-left text-[18px]">
                {footerData.footerData.contactUsTitle}
              </h5>
              <hr />
              <div className="flex sm:justify-center xl:justify-start">
                {footerData?.c_socialPhoto?.map((social: any) => {
                  return (
                    <>
                      <a
                        href="#"
                        className="w-8 h-8  text-center py-1  hover:text-white hover:bg-blue-600 hover:border-blue-600"
                      >
                        <img src={social.url} alt="" />
                      </a>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
            <div className=" px-4 md:w-1/8">{footerData.copyrighttext}</div>
            <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
              <a href="#">
                {" "}
                <h4 className="mb-2 font-medium">
                  {footerData.c_privacy.label}
                </h4>
              </a>
            </div>
            <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
              <a href="#"> {footerData.c_newPatient.label}</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
