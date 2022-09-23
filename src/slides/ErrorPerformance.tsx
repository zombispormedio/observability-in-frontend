import React from "react";
import { FlexBox, Slide, Image, Text, Notes } from "spectacle";
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
      <Notes>
        Here we go. Wow. What. Sorry, it shouldn't be this way. This happens
        when you code your own slides. Sorry. Let me check the next slide.
      </Notes>
    </Slide>
    <Slide
      className="full-slide text-4xl p-10 font-light"
      backgroundColor="rgb(255, 255, 255)"
    >
      <Text>TypeError: undefined is not a function</Text>
      <Notes>
        What! No. This is wrong. This should be a slide with dynamic data, with
        charts, you know. Showing why observability is so important. Let me see
        if we can save the next slide.
      </Notes>
    </Slide>
    <Slide
      className="full-slide text-4xl p-10 font-light"
      backgroundColor="rgb(255, 255, 255)"
    >
      <Text>RangeError: Maximum call stack size exceeded</Text>
      <Notes>
        Noooo!! This error is worse. This happens when you do a last-minute
        deployment. Off. I'm gonna try something.
      </Notes>
    </Slide>
    <Slide className="full-slide" transition={noTransition}>
      <Image src={busted} width="100%" />
      <Notes>What!!! What is wrong with my computer? Okay, okay, maybe.</Notes>
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
      <Notes>
        This is an example of an embarrassing moment that our users can suffer.
        In their daily work, in their homes, in an important presentation
        talking about observability.
      </Notes>
    </Slide>
  </>
);
