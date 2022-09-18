import React from "react";
import { FlexBox, Appear, Text, Heading, Slide, Image } from "spectacle";
import GrafanaDashboard from "../images/grafana-dashboard.png";
import DatadogDashboard from "../images/datadog-dashboard.png";
import SessionReplayDatadog from "../images/session-replay-datadog.jpg";

export const WhatCanWeDoSlides = () => {
  return (
    <>
      <Slide className="text-white">
        <FlexBox
          justifyContent="center"
          alignContent="center"
          height="100%"
          flexDirection="column"
        >
          <Heading fontSize="h3">What can we do?</Heading>
          <Appear>
            <FlexBox justifyContent="center" alignContent="center">
              <Text>Grafana?</Text>
            </FlexBox>
          </Appear>
          <Appear>
            <Text>Datadog?</Text>
          </Appear>
          <Appear>
            <Text>More dashboards?</Text>
          </Appear>
          <Appear>
            <div className="absolute left-0 right-0 top-0 flex items-center justify-center h-full">
              <Image src={DatadogDashboard} width={1000} />
            </div>
          </Appear>
          <Appear>
            <div className="absolute left-0 right-0 top-0 flex items-center justify-center h-full rotate-12">
              <Image src={GrafanaDashboard} width={1000} />
            </div>
          </Appear>
        </FlexBox>
      </Slide>
      <Slide className="text-white">
        <FlexBox
          justifyContent="center"
          alignContent="center"
          height="100%"
          flexDirection="column"
        >
          <Heading fontSize="h3">What can we do in the frontend?</Heading>
          <Appear>
            <Text>Sentry?</Text>
          </Appear>
          <Appear>
            <Text>Datadog?</Text>
          </Appear>
          <Appear>
            <Text>More user session recordings?</Text>
          </Appear>
          <Appear>
            <div className="absolute left-0 right-0 top-0 flex items-center justify-center h-full rotate-12">
              <Image src={SessionReplayDatadog} width={1000} />
            </div>
          </Appear>
        </FlexBox>
      </Slide>
    </>
  );
};
