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
          Why do we need observability in the frontend?
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
          Why do we need observability in every built software in our company?
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
  </>
);
