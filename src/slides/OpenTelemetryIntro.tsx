import React from "react";
import { FlexBox, Slide, Image, Heading } from "spectacle";
import openTelemetryLogo from "../images/opentelemetry-horizontal-color.png";
import warhorse from "../images/warhorse.jpg";
import logsMetricsAndLogs from "../images/logs_metrics_logs.png";

export const OpenTelemetryIntroSlides = () => (
  <>
    <Slide
      className="text-white full-slide"
      backgroundColor="rgb(255, 255, 255)"
    >
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
    </Slide>
    <Slide>
      <FlexBox
        justifyContent="center"
        height="100%"
        flexDirection="column"
        className="z-10"
      >
        <Heading fontSize="h3">
          OpenTelemetry is a{" "}
          <span className="text-green-600">vendor-agnostic</span> collection of
          tools, APIs and SDKs to allow the software to emit telemetry data
        </Heading>
      </FlexBox>
    </Slide>
  </>
);
