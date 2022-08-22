import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  FlexBox,
  Heading,
  FullScreen,
  Progress,
  Slide,
  Deck,
  Box,
} from "spectacle";
import "./index.css";

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
      <Heading fontSize="h3">About me</Heading>
    </Slide>
    <Slide>
      <Heading fontSize="h3" className="text-red-600">
        Error
      </Heading>
    </Slide>
    <Slide>
      <Heading fontSize="h3">User suffering</Heading>
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
      <Heading fontSize="h3">React application example</Heading>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Thank you</Heading>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
