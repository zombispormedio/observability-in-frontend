import React from "react";
import { FlexBox, Appear, Text, Heading, Slide, Image, Notes } from "spectacle";
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
        <Notes>
          And what can we do to solve it? We add Grafana, Datadog? Good tools.
          And we spend a lot of time creating, observing, and analysing more and
          more complicated dashboards, with different metrics and pie charts and
          gauges.
        </Notes>
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
        <Notes>
          But, to be realistic, what we can do in the front end? really. Do we
          add an error reporting system like Sentry? And sitting waiting for
          exceptions. Sentry is a wonderful tool, the best for error tracking,
          it gives a lot of context. I pay for it. Datadog again? Datadog does a
          lot of things. Do we record more user sessions to understand why the
          user is suffering? Is it enough? Help us? Yes, no, sometimes.
        </Notes>
      </Slide>
    </>
  );
};
