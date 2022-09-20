import React from "react";
import { FlexBox, Slide, Image, Text } from "spectacle";
import busted from "../images/busted.jpg";
import qrCode from "../images/qr-code.png";
import { noTransition } from "../utils";

export const ErrorPerformanceSlides = () => (
  <>
    <Slide
      className="full-slide text-4xl p-10 font-light"
      backgroundColor="rgb(255, 255, 255)"
    >
      <Text>TypeError: Cannot read property 'name' of undefined</Text>
    </Slide>
    <Slide
      className="full-slide text-4xl p-10 font-light"
      backgroundColor="rgb(255, 255, 255)"
    >
      <Text>TypeError: undefined is not a function</Text>
    </Slide>
    <Slide
      className="full-slide text-4xl p-10 font-light"
      backgroundColor="rgb(255, 255, 255)"
    >
      <Text>RangeError: Maximum call stack size exceeded</Text>
    </Slide>
    <Slide className="full-slide" transition={noTransition}>
      <Image src={busted} width="100%" />
    </Slide>
    <Slide
      backgroundColor="rgb(57, 146, 255)"
      className="full-slide"
      transition={noTransition}
    >
      <FlexBox alignItems="center" height="100%">
        <FlexBox flexDirection="column" alignItems="flex-start">
          <div className="text-d-h1 sm:text-d-j md:text-[length:120px] text-white">
            :)
          </div>
          <div className="md:text-[length:30px] md:leading-[40px] text-white p-0">
            The website is dying. Refresh and cross your fingers 🤞
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
  </>
);
