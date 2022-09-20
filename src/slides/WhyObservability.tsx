import React from "react";
import {
  FlexBox,
  Image,
  Heading,
  Slide,
  UnorderedList,
  ListItem,
  Text,
} from "spectacle";
import errorsChart from "../images/errors-chart.png";
import errorTrace from "../images/error-trace.png";
import GrafanaLogo from "../images/grafana.png";
import DatadogLogo from "../images/datadog.png";
import HoneycombLogo from "../images/honeycomb.png";
import JaegerLogo from "../images/jaeger-logo.png";
import LightstepLogo from "../images/lightstep.png";

import { noTransition } from "../utils";

export const WhyObservabilitySlides = () => (
  <>
    <Slide className="text-white">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">
          Why we need observability in the frontend?
        </Heading>
      </FlexBox>
    </Slide>
    <Slide className="text-white" transition={noTransition}>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">
          Why we need observability in every built software in your company?
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Image src={errorsChart} />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Image src={errorTrace} />
      </FlexBox>
    </Slide>
    <Slide className="text-white">
      <FlexBox>
        <FlexBox flexDirection="column">
          <Text className="text-green-500">I want to group by...</Text>
          <UnorderedList>
            <ListItem>
              <Text>Request</Text>
            </ListItem>
            <ListItem>
              <Text>Error</Text>
            </ListItem>
            <ListItem>
              <Text>Interaction</Text>
            </ListItem>
            <ListItem>
              <Text>User</Text>
            </ListItem>
            <ListItem>
              <Text>...</Text>
            </ListItem>
          </UnorderedList>
        </FlexBox>
        <FlexBox flexDirection="column">
          <Text className="text-green-500">and how is connected with...</Text>
          <UnorderedList>
            <ListItem>
              <Text>Input</Text>
            </ListItem>
            <ListItem>
              <Text>User</Text>
            </ListItem>
            <ListItem>
              <Text>Other operations</Text>
            </ListItem>
            <ListItem>
              <Text>Application & Business context</Text>
            </ListItem>
            <ListItem>
              <Text>...</Text>
            </ListItem>
          </UnorderedList>
        </FlexBox>
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
