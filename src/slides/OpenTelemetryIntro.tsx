import React from "react";
import { FlexBox, Slide, Image, Heading, Notes } from "spectacle";
import openTelemetryLogo from "../images/opentelemetry-horizontal-color.png";
import warhorse from "../images/warhorse.jpg";
import logsMetricsAndLogs from "../images/logs_metrics_logs.png";
import GrafanaLogo from "../images/grafana.svg";
import DatadogLogo from "../images/datadog.png";
import HoneycombLogo from "../images/honeycomb.svg";
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
      <Notes>
        Then OpenTelemetry appears, the next observability standard in the
        industry, and we can use it in our web applications. It's our war horse
        for understanding why our users are living bad experiences. Incubated by
        the CNCF (Cloud Native Computing Foundation). It has support for most
        languages and platforms. It has a good specifications. It makes use of
        the three pillars of observability (logs, metrics, traces) Logs,
        metrics, and traces for the front end, what? Maybe logs and metrics are
        overkill for the front end, but traces.
      </Notes>
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
      <Notes>
        But, it’s only a collection of tools, APIs and SDKs to allow the
        software to emit telemetry data. And it’s vendor agnostic, this is
        important, you instrument your code with OpenTelemetry, and you don’t
        depend on a vendor. Neither sentry nor datadog is in your code. And you
        can send telemetry data wherever observability platform, to visualize,
        analyze, and take advantage totally of all the telemetry data. And
        choose it wisely.
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
