import React from "react";
import {
  FlexBox,
  Image,
  Heading,
  Slide,
  UnorderedList,
  ListItem,
  Text,
  Notes,
} from "spectacle";
import errorsChart from "../images/errors-chart.png";
import errorTrace from "../images/error-trace.png";
import HubbleTelescope from "../images/hubble-telescope.png";

export const WhyObservabilitySlides = () => (
  <>
    <Slide>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">
          Observability is like a{" "}
          <span className="text-green-600">telescope</span>
        </Heading>
        <Image src={HubbleTelescope} />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">
          From <span className="text-green-600">macro </span>
          view...
        </Heading>
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
        <Heading fontSize="h3">
          ...to <span className="text-green-600">micro </span>
          view
        </Heading>
        <Image src={errorTrace} />
      </FlexBox>
    </Slide>
    <Slide className="text-white">
      <FlexBox justityContent="center">
        <FlexBox flexDirection="column">
          <Text className="self-start ml-0 pl-0">I want to group by...</Text>
          <div className="border-4 border-green-500 self-start">
            <UnorderedList>
              <ListItem>
                <Text>Requests</Text>
              </ListItem>
              <ListItem>
                <Text>Errors</Text>
              </ListItem>
              <ListItem>
                <Text>Interactions</Text>
              </ListItem>
              <ListItem>
                <Text>Users</Text>
              </ListItem>
            </UnorderedList>
          </div>
        </FlexBox>
        <FlexBox flexDirection="column">
          <Text className="self-start ml-0 pl-0">
            and how are connected to...
          </Text>
          <div className="border-4 border-green-500">
            <UnorderedList>
              <ListItem>
                <Text>Users</Text>
              </ListItem>
              <ListItem>
                <Text>Inputs & Outputs</Text>
              </ListItem>
              <ListItem>
                <Text>Operations</Text>
              </ListItem>
              <ListItem>
                <Text>Application & Business</Text>
              </ListItem>
            </UnorderedList>
          </div>
        </FlexBox>
      </FlexBox>
      <Notes>
        And in a practical way, I want to group by request, errors,
        interactions, users and what I think is important, and see how it's
        connected with everything around, the context of the user, the input,
        other operations, the business context, the browser version?
      </Notes>
    </Slide>
    <Slide className="text-white">
      <Heading fontSize="h3">Why do we need observability?</Heading>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <div className="border-4 border-green-500">
          <UnorderedList>
            <ListItem>
              <Text>Understand the software</Text>
            </ListItem>
            <ListItem>
              <Text>Understand the users and the impact</Text>
            </ListItem>
            <ListItem>
              <Text>Understand the problem and the root cause</Text>
            </ListItem>
          </UnorderedList>
        </div>
      </FlexBox>
      <Notes>
        Why do we need observability in the front? Why do we need observability
        in every built software in your company? To understand the whole problem
        or feelings, in a macro and a micro view, like a telescope understanding
        the risks, understanding the users, the impact and ultimately/finally
        understanding the software and the root cause.
      </Notes>
    </Slide>
  </>
);
