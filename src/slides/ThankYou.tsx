import React from "react";
import { Heading, Slide, Image, FlexBox, Appear } from "spectacle";
import OpentelemetryHorizontalLogo from "../images/opentelemetry-horizontal-color.png";

export const ThankYouSlide = () => (
  <Slide>
    <Heading fontSize="h3">Thank you</Heading>
    <Appear>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">Contribute to</Heading>
        <Image src={OpentelemetryHorizontalLogo} width={600} />
      </FlexBox>
    </Appear>
  </Slide>
);
