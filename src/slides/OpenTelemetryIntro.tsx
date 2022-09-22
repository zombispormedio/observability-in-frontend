import React from "react";
import { FlexBox, Slide, Image, Heading } from "spectacle";
import openTelemetryLogo from "../images/opentelemetry-horizontal-color.png";
import warhorse from "../images/warhorse.jpg";
import logsMetricsAndLogs from "../images/logs_metrics_logs.png";
import GrafanaLogo from "../images/grafana.png";
import DatadogLogo from "../images/datadog.png";
import HoneycombLogo from "../images/honeycomb.png";
import JaegerLogo from "../images/jaeger-logo.png";
import LightstepLogo from "../images/lightstep.png";

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
    <Slide className="text-white">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">Don't forget!</Heading>
        <Heading fontSize="h3">Find your observability platform</Heading>
        <div className="grid grid-cols-5 gap-5 mt-10">
          <div className="flex items-center justify-center">
            <Image src={GrafanaLogo} width={150} />
          </div>
          <div className="flex items-center justify-center">
            <Image src={DatadogLogo} width={200} />
          </div>
          <div>
            <div className="bg-white">
              <Image src={JaegerLogo} width={300} />
            </div>
          </div>
          <Image src={HoneycombLogo} width={300} />
          <Image src={LightstepLogo} width={300} />
        </div>
      </FlexBox>
    </Slide>
  </>
);
