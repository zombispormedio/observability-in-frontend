import React from "react";
import {
  Image,
  Appear,
  Text,
  Heading,
  Slide,
  Notes,
  UnorderedList,
  ListItem,
  FlexBox,
} from "spectacle";
import ErrorReportingImage from "../images/error-reporting.png";
import GrafanaDashboard from "../images/grafana-dashboard.png";
import SessionReplayDatadog from "../images/session-replay-datadog.jpg";
import ErrorReportingSessionReplaysDashboards from "../images/error_reporting_session_replays_dashboards.png";

export const WhatCanWeDoSlides = () => {
  return (
    <>
      <Slide className="text-white">
        <Heading fontSize="h3">What can we do?</Heading>

        <UnorderedList>
          <Appear>
            <ListItem className="flex">
              <Text>Error reporting?</Text>
              <Image
                src={ErrorReportingImage}
                width={600}
                className="absolute right-0 mr-36 -mt-5"
              />
            </ListItem>
          </Appear>
          <Appear>
            <ListItem className="flex">
              <Text>Dashboards?</Text>
              <Image
                src={GrafanaDashboard}
                width={800}
                className="absolute right-0 mr-10 -mt-24 rotate-6"
              />
            </ListItem>
          </Appear>
          <Appear>
            <ListItem className="flex">
              <Text>Session Replays?</Text>
              <Image
                src={SessionReplayDatadog}
                width={800}
                className="absolute right-0 mr-10 -mt-56 -rotate-6"
              />
            </ListItem>
          </Appear>
        </UnorderedList>

        <Notes>
          And what can we do to solve it? We add Grafana, Datadog? Good tools.
          And we spend a lot of time creating, observing, and analysing more and
          more complicated dashboards, with different metrics and pie charts and
          gauges. But, to be realistic, what we can do in the front end? really.
          Do we add an error reporting system like Sentry? And sitting waiting
          for exceptions. Sentry is a wonderful tool, the best for error
          tracking, it gives a lot of context. I pay for it. Datadog again?
          Datadog does a lot of things. Do we record more user sessions to
          understand why the user is suffering? Is it enough? Help us? Yes, no,
          sometimes.
        </Notes>
      </Slide>
      <Slide backgroundColor="rgb(255, 255, 255)">
        <FlexBox
          justifyContent="center"
          alignContent="center"
          height="100%"
          flexDirection="column"
        >
          <Image src={ErrorReportingSessionReplaysDashboards} width={600} />
        </FlexBox>
        <Notes>
          Do you remember? Almost the same. It's okay to have it, but it's not
          enough if you don't use it wisely.
        </Notes>
      </Slide>
    </>
  );
};
