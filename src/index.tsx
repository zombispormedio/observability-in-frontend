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
  Notes,
  Appear,
} from "spectacle";
import "./index.css";
import avatar from "./images/avatar.jpg";
import trazableLogo from "./images/logo_trazable.png";
import ReactAlicanteCover from "./images/first-slides-2022.010-xavier.jpg";
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
import { WhatCanWeDoSlides } from "./slides/WhatCanWeDo";
import ReactLogo from "./images/react.png";

const theme = {
  colors: {
    primary: "color: rgb(34 197 94);",
    secondary: "#fff",
  },
};

const Presentation = () => (
  <Deck theme={theme}>
    <Slide className="full-slide">
      {window.location.search.includes("react-alicante") ? (
        <Image src={ReactAlicanteCover} width="100%" />
      ) : (
        <FlexBox height="100%" flexDirection="column">
          <Heading margin="0px">
            <span className="text-green-500">Observability</span> in frontend:
          </Heading>

          <Heading margin="0px 32px" fontSize="h3">
            React ❤️ OpenTelemetry
          </Heading>
        </FlexBox>
      )}

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
          <Text>Software Engineer 🌍</Text>
          <div className="bg-white mt-10 p-5">
            <Image src={trazableLogo} width={300} />
          </div>
        </div>
      </FlexBox>
      <Notes>
        I am Xavier Serrano. Software engineer, frontend, backend, SRE,
        whatever. Passionate about observability and 5 years in love with React.
        I work in Trazable, a startup from Valencia. We make traces and help
        QAs, but, for food companies.
      </Notes>
    </Slide>
    <ErrorPerformanceSlides />
    <UserPainSlides />
    <WhatCanWeDoSlides />


    <WhyObservabilitySlides />
    <Slide>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">
          Instrument and observe <br />
          <span className="text-green-600">React applications</span>
        </Heading>
        <Image src={ReactLogo} width={150} />
      </FlexBox>
      <Notes>
        And here we go to how to instrument clients using OpenTelemetry.
      </Notes>
    </Slide>
    <OpenTelemetryIntroSlides />
    <Slide>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3" className="underline cursor-pointer">
          <a
            href="https://github.com/zombispormedio/observable-flora"
            target="_blank"
          >
            FMS (Flower Management System)
          </a>
        </Heading>
        <Image src={example} width={1000} />
        <Appear>
          <Text className="text-white">
            (React Query, Formik and React Router)
          </Text>
        </Appear>
      </FlexBox>
      <Notes>
        For this explanation, I created an example with a backend and a frontend
        using React Query, React Router and Formik to make it more like a real
        application.
      </Notes>
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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

createRoot(document.getElementById("root")).render(<Presentation />);
