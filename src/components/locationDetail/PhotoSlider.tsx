import * as React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const PhotoSlider = (props: any) => {
  const { c_slide } = props;
  // console.log("hjsjkdfg=======", c_slide);
  const photos = c_slide?.map((element: any) => {
    // console.log('element', element)
    return (
      <SplideSlide>
        <img src={element?.url} alt="jadbhfm" />
      </SplideSlide>
    );
  });
  return (
    <>
      <div className=" w-1/3 h-1/4">
        <Splide aria-label="Photo Slider">{photos}</Splide>
      </div>
    </>
  );
};

export default PhotoSlider;
