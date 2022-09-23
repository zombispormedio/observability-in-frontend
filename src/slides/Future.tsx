import React from "react";
import { FlexBox, Slide, Image, Heading, Notes } from "spectacle";
import OpentelemetryFuture from "../images/opentelemetry_future.png";

export const FutureSlides = () => (
  <Slide>
    <Heading fontSize="h3">The future of OpenTelemetry</Heading>
    <FlexBox
      justifyContent="center"
      alignContent="center"
      height="100%"
      flexDirection="column"
    >
      <Image src={OpentelemetryFuture} width={1200} />
      <a
        href="https://github.com/cncf/velocity"
        target="_blank"
        className="text-white underline mt-1"
      >
        https://github.com/cncf/velocity
      </a>
    </FlexBox>
    <Notes>
      The future of OpenTelemetry is bright. It’s the second largest contributor
      community in CNCF. The chart shows the development velocity rate with the
      number of contributors. It’s the second one after Kubernetes. Impressive.
      But make sense, SDK by language. It is the moment to pay attention and
      explore the paths OpenTelemetry can take us in the browser and the client
      applications. And give our vision.
    </Notes>
  </Slide>
);
