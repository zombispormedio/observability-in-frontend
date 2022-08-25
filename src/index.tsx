import React from "react";
import ReactDOM from "react-dom";
import {
  FlexBox,
  Heading,
  FullScreen,
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
import busted from "./images/busted.jpg";
import qrCode from "./images/qr-code.png";

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
