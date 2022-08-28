import React from "react";
import { Heading, ListItem, Slide, Text, UnorderedList } from "spectacle";

export const ReferencesSlide = () => (
  <Slide className="text-white">
    <Heading fontSize="h3" className="m-0">
      References
    </Heading>
    <UnorderedList>
      <ListItem>
        <Text className="underline">
          <a href="https://slack.engineering/client-tracing-understanding-mobile-and-desktop-application-performance-at-scale/">
            Client Tracing: Understanding Mobile and Desktop Application
            Performance at Scale
          </a>
        </Text>
      </ListItem>
      <ListItem>
        <Text className="underline">
          <a href="https://speakerdeck.com/charity/observability-and-complex-systems-devopsdays-ams">
            Observability and Complex Systems
          </a>
        </Text>
      </ListItem>
      <ListItem>
        <Text className="underline">
          <a href="https://docs.honeycomb.io/getting-data-in/opentelemetry/browser-js/">
            Instrumenting Browser JavaScript Apps
          </a>
        </Text>
      </ListItem>
      <ListItem>
        <Text className="underline">
          <a href="https://github.com/open-telemetry/opentelemetry-js/tree/main/examples/opentelemetry-web">
            OpenTelemetry web example
          </a>
        </Text>
      </ListItem>
    </UnorderedList>
  </Slide>
);
