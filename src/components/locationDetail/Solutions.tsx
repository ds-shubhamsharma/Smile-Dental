import { Link } from "@yext/pages/components";
import * as React from "react";
// import arrow from "../../images/arrow-right.svg"
// function getCount(str: any) {
//   return str.split(" ").filter(function (num: any) {
//     return num != "";
//   }).length;
// }

export default function Solutions(props: any) {
  return (
    <>
      <div className="solutions-sec">
        <h2>
          {" "}
          {props.c_para}
          {/* {console.log("Total Words in String: " + getCount(props.c_para))} */}
          {/* {getCount(props.c_para) % 2 == 0 ? <div>even</div> : <div>odd</div>} */}
        </h2>

        <div className="solution-inner">
          {/* <div className="rounded-lg shadow-lg bg-white max-w-sm"></div> */}

          {props.c_card.map((e: any) => (
            <>
              <div className="sol-card bg-white">
                <img src={e.pic.url} alt="" className="" />
                <h3>{e.heading}</h3>
                <h3>{e.para}</h3>

                {/* <Link
                  className="font-medium py-1 px-8 text-[15px]"
                  href="#"
                  style={{ fontFamily: "Roboto" }}
                >
                  {e.button.label}
                  <svg
                    width="27"
                    height="27"
                   
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="13.5"
                      cy="13.5"
                      r="13"
                      stroke="#255EC1"
                      stroke-dasharray="3 3"
                    />
                    <path
                      d="M7.02031 14.2506C6.94477 14.1786 6.88463 14.0921 6.84353 13.9962C6.80244 13.9003 6.78125 13.7971 6.78125 13.6928C6.78125 13.5884 6.80244 13.4852 6.84353 13.3893C6.88463 13.2934 6.94477 13.2069 7.02031 13.1349L11.5227 8.61932C11.5957 8.54618 11.6828 8.4885 11.7786 8.44971C11.8744 8.41092 11.9771 8.39182 12.0805 8.39354C12.186 8.39078 12.2909 8.40936 12.3891 8.44815C12.4872 8.48695 12.5765 8.54517 12.6516 8.61932C12.7984 8.77052 12.8806 8.973 12.8806 9.18377C12.8806 9.39455 12.7984 9.59703 12.6516 9.74823L9.50391 12.8959L18.2031 12.8959C18.4145 12.8959 18.6172 12.9798 18.7666 13.1293C18.916 13.2787 19 13.4814 19 13.6928C19 13.9041 18.916 14.1068 18.7666 14.2562C18.6172 14.4057 18.4145 14.4896 18.2031 14.4896L9.50391 14.4896L12.6516 17.6373C12.8013 17.787 12.8854 17.99 12.8854 18.2017C12.8854 18.4135 12.8013 18.6165 12.6516 18.7662C12.5019 18.9159 12.2988 19 12.0871 19C11.8754 19 11.6724 18.9159 11.5227 18.7662L7.02031 14.2506Z"
                      fill="#255EC1"
                    />
                  </svg>
                </Link> */}
                <button className="py-5 px-20">
                  <Link className="button-red" href="#" eventName={`cta`}>
                    {e.button.label}
                  </Link>
                </button>
              </div>
            </>
          ))}
        </div>
        <div className="view-mor  ">
          <a href="#" className="rounded-full">
            {props.c_newsMore.label}
          </a>
        </div>
      </div>
    </>
  );
}
