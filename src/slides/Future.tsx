import React from "react";
import { FlexBox, Slide, Image, Heading, Notes } from "spectacle";
import OpentelemetryFuture from "../images/opentelemetry_future.png";
import GrafanaLogo from "../images/grafana.svg";
import DatadogLogo from "../images/datadog.png";
import HoneycombLogo from "../images/honeycomb.svg";
import JaegerLogo from "../images/jaeger-logo.png";
import LightstepLogo from "../images/lightstep.png";

export const FutureSlides = () => (
  <>
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
        The future of OpenTelemetry is bright. It’s the second largest
        contributor community in CNCF. The chart shows the development velocity
        rate with the number of contributors. It’s the second one after
        Kubernetes. Impressive. But make sense, SDK by language. It is the
        moment to pay attention and explore the paths OpenTelemetry can take us
        in the browser and the client applications. And give our vision.
      </Notes>
    </Slide>
    <Slide className="text-white">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">Find your observability platform</Heading>
        <div className="grid grid-cols-3 gap-12 mt-10">
          <div className="flex justify-center">
            <Image src={GrafanaLogo} width="300" />
          </div>
          <div className="flex justify-center">
            <Image src={LightstepLogo} width={300} />
          </div>
          <div className="flex items-center">
            <Image src={DatadogLogo} width={300} className="object-contain" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="flex justify-center">
            <Image src={HoneycombLogo} width={300} />
          </div>

          <div className="flex justify-center">
            <Image src={JaegerLogo} className="object-contain" width="300" />
          </div>
        </div>
      </FlexBox>
      <Notes>
        In this presentation, I used honeycomb in my examples. They don't pay
        me. I am only addicted. But is it enough? OpenTelemetry is in the title
        of my talk. The latest trendy definitive tool.
      </Notes>
    </Slide>
  </>
);
