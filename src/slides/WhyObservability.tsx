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
          <Text>I want to group by...</Text>
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
          <Text>and how is connected with...</Text>
          <UnorderedList>
            <ListItem>
              <Text>Other operations</Text>
            </ListItem>
            <ListItem>
              <Text>Input</Text>
            </ListItem>
            <ListItem>
              <Text>User</Text>
            </ListItem>
            <ListItem>
              <Text>Every context available</Text>
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
        <Heading fontSize="h3">Maybe it's exagerated</Heading>
        <Heading fontSize="h3">
          But when you are <b> solving a customer issue</b>, you appreciate it
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
      </FlexBox>
    </Slide>
  </>
);