import React from "react";
import { Heading, Slide, Image, FlexBox, Appear } from "spectacle";
import OpentelemetryHorizontalLogo from "../images/opentelemetry-horizontal-color.png";

export const ThankYouSlide = () => (
  <Slide backgroundColor="rgb(255, 255, 255)">
    <Heading fontSize="h3" className="text-black">
      Thank you
    </Heading>
    <Appear>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3" className="text-black">
          Contribute to
        </Heading>
        <Image src={OpentelemetryHorizontalLogo} width={600} />
      </FlexBox>
    </Appear>
  </Slide>
);
