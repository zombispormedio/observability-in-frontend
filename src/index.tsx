import React from "react";
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
import observabilityImage from "./images/observability.jpg";
import ErrorReportingSessionReplaysDashboards from "./images/error_reporting_session_replays_dashboards.png";
import { ErrorPerformanceSlides } from "./slides/ErrorPerformance";
import { UserPainSlides } from "./slides/UserPain";
import { ThankYouSlide } from "./slides/ThankYou";
import { ReferencesSlide } from "./slides/References";
import { SetupOpenTelemetrySlide } from "./slides/SetupOpentelemetry";
import { WhyObservabilitySlides } from "./slides/WhyObservability";
import { MeasureActionsSlides } from "./slides/MeasureActions";
import { MeasurePageDataLoadSlides } from "./slides/MeasurePageDataLoad";
import example from "./images/example.png";
import { CreateSpanSlide } from "./slides/CreateSpan";
import { MeasurePageLoadNavigationSlides } from "./slides/MeasurePageDataLoadNavigation";
import { FutureSlides } from "./slides/Future";
import { OpenTelemetryIntroSlides } from "./slides/OpenTelemetryIntro";

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
    <ErrorPerformanceSlides />
    <UserPainSlides />
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
          <Text>Datadog?</Text>
        </Appear>
        <Appear>
          <Text>More user sessions recordings?</Text>
        </Appear>
      </FlexBox>
    </Slide>
    <OpenTelemetryIntroSlides />
    <Slide backgroundColor="rgb(255, 255, 255)">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Image src={ErrorReportingSessionReplaysDashboards} width={600} />
      </FlexBox>
    </Slide>

    <Slide className="text-white" backgroundColor="rgb(255, 255, 255)">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Text className="text-black uppercase">
          It's not about dashboards, error reporting, session replays, logs,
          metrics or traces. The thing that matters is that observability can
          empower us to build better user experiences.
        </Text>
        <Image src={observabilityImage} width={450} />
      </FlexBox>
    </Slide>
    <WhyObservabilitySlides />
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
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Image src={example} width={1200} />
        <Heading fontSize="h3" className="underline cursor-pointer">
          <a
            href="https://github.com/zombispormedio/observable-flora"
            target="_blank"
          >
            React application example
          </a>
        </Heading>
      </FlexBox>
    </Slide>
    <CreateSpanSlide />
    <SetupOpenTelemetrySlide />
    <MeasureActionsSlides />
    <MeasurePageDataLoadSlides />
    <MeasurePageLoadNavigationSlides />
    <FutureSlides />
    <ThankYouSlide />
    <ReferencesSlide />
  </Deck>
);

createRoot(document.getElementById("root")).render(<Presentation />);
