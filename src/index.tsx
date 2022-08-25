import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import {
  FlexBox,
  Heading,
  FullScreen,
  Slide,
  Deck,
  Image,
  Box,
  Text,
  Appear,
} from "spectacle";
import "./index.css";
import avatar from "./images/avatar.jpg";
import trazableLogo from "./images/logo_trazable.png";
import firstWorldProblemsMeme from "./images/first_world_problems.png";
import busted from "./images/busted.jpg";
import qrCode from "./images/qr-code.png";
import observabilityImage from "./images/observability.png";

const theme = {
  colors: {
    primary: "color: rgb(34 197 94);",
    secondary: "#fff",
  },
};

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px">
          <span className="text-green-500">Observability</span> in frontend:
        </Heading>

        <Heading margin="0px 32px" fontSize="h3">
          React ❤️ OpenTelemetry
        </Heading>
      </FlexBox>
      <div className="absolute bottom-0 left-0 mb-5 ml-5">
        <Box padding="0 1em">
          <FullScreen />
        </Box>
      </div>
    </Slide>
    <Slide>
      <FlexBox justifyContent="flex-start">
        <div className="border-4 border-green-500 w-fit">
          <Image src={avatar} width={600} />
        </div>
        <div className="text-white flex items-center flex-col pl-24">
          <Text>Xavier Serrano</Text>
          <Text>Software Enginner 🌍</Text>
          <Image src={trazableLogo} width={300} className="mt-10" />
        </div>
      </FlexBox>
    </Slide>
    <Slide
      className="full-slide text-4xl p-10 font-light"
      backgroundColor="rgb(255, 255, 255)"
    >
      TypeError: Cannot read property 'name' of undefined
    </Slide>
    <Slide
      className="full-slide text-4xl p-10 font-light"
      backgroundColor="rgb(255, 255, 255)"
    >
      TypeError: undefined is not a function
    </Slide>
    <Slide
      className="full-slide text-4xl p-10 font-light"
      backgroundColor="rgb(255, 255, 255)"
    >
      RangeError: Maximum call stack size exceeded
    </Slide>
    <Slide className="full-slide">
      <Image src={busted} width="100%" />
    </Slide>
    <Slide backgroundColor="rgb(57, 146, 255)" className="full-slide">
      <FlexBox alignItems="center" height="100%">
        <FlexBox flexDirection="column" alignItems="flex-start">
          <div className="text-d-h1 sm:text-d-j md:text-[length:120px] text-white">
            :)
          </div>
          <div className="md:text-[length:30px] md:leading-[40px] text-white">
            The website is dying. Try to refresh and cross your fingers 🤞
            <br />
            Possibly your data is not saved. Spooky. Spooky.
          </div>
          <FlexBox alignItems="flex-start" className="gap-3 mt-10">
            <Image src={qrCode} width={96} height={96} />
            <FlexBox
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <div className="text-white">
                Maybe the website owner needs observability to solve this issue
                fastly.
              </div>
              <div className="text-white mt-5">
                Contact a support person, give them this info: <br />
                Code: OPENTELEMETRY
              </div>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="rgb(255, 255, 255)">
      <FlexBox justifyContent="center" alignContent="center" height="100%">
        <Image src={firstWorldProblemsMeme} width={700} />
      </FlexBox>
    </Slide>
    <Slide className="text-white">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">What can we do?</Heading>
        <Appear>
          <Text>Grafana?</Text>
        </Appear>
        <Appear>
          <Text>Datadog?</Text>
        </Appear>
        <Appear>
          <Text>More dashboards?</Text>
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
          <Text>Magic scripts?</Text>
        </Appear>
        <Appear>
          <Text>Session Replays?</Text>
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
        <Heading fontSize="h3">
          Magic scripts don't know about your application or your business
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
        <Heading fontSize="h3">
          Observability describes the world from the first-person perspective of
          the software doing something.
        </Heading>
        <Heading fontSize="h3">
          Software explaining itself from the inside out
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
        <Heading fontSize="h3">
          Why we need observability in the frontend?
        </Heading>
        <Appear>
          <Text>Context</Text>
        </Appear>
        <Appear>
          <Text>Explorability</Text>
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
        <Heading fontSize="h3">Frontend is the last mile</Heading>
        <Heading fontSize="h3">
          The forgotten for observability/monitoring tools
        </Heading>
        <Text>
          Because it is the closest thing to humans and nobody understands it
        </Text>
      </FlexBox>
    </Slide>
    <Slide className="text-white">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">OpenTelemetry</Heading>
        <Heading fontSize="h3">The war horse</Heading>
      </FlexBox>
    </Slide>
    <Slide className="text-white">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">
          OpenTelemetry gives Metrics, Traces and Logs (The "three pillars of
          observability")
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
        <Image src={observabilityImage} width={500} />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">Instrument clients</Heading>
        <Heading fontSize="h3">The challenge: Human Interaction</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Measure actions</Heading>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Measure page data loading</Heading>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Thank you</Heading>
      <Heading fontSize="h3">Contribute to OpenTelemetry</Heading>
    </Slide>
  </Deck>
);

createRoot(document.getElementById("root")).render(<Presentation />);
