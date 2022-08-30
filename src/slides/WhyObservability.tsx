import React from "react";
import { FlexBox, Image, Heading, Slide } from "spectacle";
import errorsChart from "../images/errors-chart.png";
import errorTrace from "../images/error-trace.png";

export const WhyObservabilitySlides = () => (
  <>
    <Slide className="text-white">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">
          Why we need observability in the frontend?
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Image src={errorsChart} />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Image src={errorTrace} />
      </FlexBox>
    </Slide>
  </>
);
