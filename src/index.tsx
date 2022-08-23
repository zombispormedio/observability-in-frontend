import React from "react";
import ReactDOM from "react-dom";
import {
  FlexBox,
  Heading,
  FullScreen,
  Progress,
  Slide,
  Deck,
  Image,
  Box,
  Text,
} from "spectacle";
import "./index.css";
import avatar from "./images/avatar.jpg";
import trazableLogo from "./images/logo_trazable.png";
import firstWorldProblemsMeme from "./images/first_world_problems.png";

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const theme = {
  colors: {
    primary: "color: rgb(34 197 94);",
    secondary: "#fff",
  },
};

const Presentation = () => (
  <Deck template={template} theme={theme}>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px">
          <span className="text-green-500">Observability</span> in frontend:
        </Heading>

        <Heading margin="0px 32px" fontSize="h3">
          React ❤️ OpenTelemetry
        </Heading>
      </FlexBox>
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
    <Slide>
      <Heading fontSize="h3" className="text-red-600">
        Error
      </Heading>
    </Slide>
    <Slide>
      <FlexBox justifyContent="center" alignContent="center" height="100%">
        <Image src={firstWorldProblemsMeme} width={600} />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">
        What do you do in the application? Grafana
      </Heading>
    </Slide>
    <Slide>
      <Heading fontSize="h3">What do you do in the frontend? Sentry</Heading>
    </Slide>
    <Slide>
      <Heading fontSize="h3">
        is it enough? Do you feel empowered when an issue comes?
      </Heading>
    </Slide>
    <Slide>
      <Heading fontSize="h3">
        How be empowered by observability? Context. Replicate the error
      </Heading>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Last mile, backend easy, frontend hard</Heading>
    </Slide>
    <Slide>
      <Heading fontSize="h3">OpenTelemetry</Heading>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Instrument clients: Human interaction</Heading>
    </Slide>
    <Slide>
      <Heading fontSize="h3">React example: Measure actions</Heading>
    </Slide>
    <Slide>
      <Heading fontSize="h3">React example: Measure page data loading</Heading>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Thank you</Heading>
      <Heading fontSize="h3">Contribute to OpenTelemetry</Heading>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
