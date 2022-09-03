import React from "react";
import { FlexBox, Slide, Image, Heading, Text } from "spectacle";
import OpentelemetryFuture from "../images/opentelemetry_future.png";

export const FutureSlides = () => (
  <Slide>
    <Heading fontSize="h3">The future of Opentelemetry</Heading>
    <FlexBox
      justifyContent="center"
      alignContent="center"
      height="100%"
      flexDirection="column"
    >
      <Image src={OpentelemetryFuture} width={900} />
      <a
        href="https://github.com/cncf/velocity"
        target="_blank"
        className="text-white underline mt-1"
      >
        https://github.com/cncf/velocity
      </a>
    </FlexBox>
  </Slide>
);
