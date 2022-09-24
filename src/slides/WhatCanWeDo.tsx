import React from "react";
import {
  FlexBox,
  Appear,
  Text,
  Heading,
  Slide,
  Notes,
  UnorderedList,
  ListItem,
} from "spectacle";

export const WhatCanWeDoSlides = () => {
  return (
    <Slide className="text-white">
      <Heading fontSize="h3">What could we do?</Heading>

      <UnorderedList>
        <Appear>
          <ListItem>
            <Text>Error reporting?</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Dashboards?</Text>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Text>Session Replays?</Text>
          </ListItem>
        </Appear>
      </UnorderedList>

      <Notes>
        And what can we do to solve it? We add Grafana, Datadog? Good tools. And
        we spend a lot of time creating, observing, and analysing more and more
        complicated dashboards, with different metrics and pie charts and
        gauges. But, to be realistic, what we can do in the front end? really.
        Do we add an error reporting system like Sentry? And sitting waiting for
        exceptions. Sentry is a wonderful tool, the best for error tracking, it
        gives a lot of context. I pay for it. Datadog again? Datadog does a lot
        of things. Do we record more user sessions to understand why the user is
        suffering? Is it enough? Help us? Yes, no, sometimes.
      </Notes>
    </Slide>
  );
};
