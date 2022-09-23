import React from "react";
import { Heading, Slide, Image, FlexBox, Appear, Notes } from "spectacle";
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
    <Notes>
      Thank you very much for your attention. Don't forget to contribute to
      OpenTelemetry, at least take a look at it, the thing is growing.
    </Notes>
  </Slide>
);
