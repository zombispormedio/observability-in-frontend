import React from "react";
import { FlexBox, Slide, Image, Heading, Notes } from "spectacle";
import openTelemetryLogo from "../images/opentelemetry-horizontal-color.png";
import warhorse from "../images/warhorse.jpg";
import logsMetricsAndLogs from "../images/logs_metrics_logs.png";

export const OpenTelemetryIntroSlides = () => (
  <Slide className="text-white full-slide" backgroundColor="rgb(255, 255, 255)">
    <FlexBox
      justifyContent="center"
      height="100%"
      flexDirection="column"
      className="z-10"
    >
      <Image src={openTelemetryLogo} width={500} className="mb-10" />
    </FlexBox>
    <FlexBox
      justifyContent="center"
      height="100%"
      className="z-10 gap-48 mb-10"
    >
      <Image src={warhorse} width={300} />
      <Image src={logsMetricsAndLogs} width={400} />
    </FlexBox>
    <Notes>
      Then OpenTelemetry appears, the next observability standard in the
      industry, and we can use it in our web applications. It's our war horse
      for understanding why our users are living bad experiences. Incubated by
      the CNCF (Cloud Native Computing Foundation). It has support for most
      languages and platforms. It has a good specifications. It makes use of the
      three pillars of observability (logs, metrics, traces) Logs, metrics, and
      traces for the front end, what? Maybe logs and metrics are overkill for
      the front end, but traces.
    </Notes>
  </Slide>
);
