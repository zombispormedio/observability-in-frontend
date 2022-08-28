import React from "react";
import { FlexBox, Slide, Image, Heading } from "spectacle";
import firstWorldProblemsForCrashes from "../images/first_world_problems1.png";
import firstWorldProblemsForSlowdown from "../images/first_world_problems2.png";
import { noTransition } from "../utils";

export const UserPainSlides = () => (
  <>
    <Slide backgroundColor="rgb(255, 255, 255)">
      <FlexBox justifyContent="center" alignContent="center" height="100%">
        <Image src={firstWorldProblemsForCrashes} width={700} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="rgb(255, 255, 255)" transition={noTransition}>
      <FlexBox justifyContent="center" alignContent="center" height="100%">
        <Image src={firstWorldProblemsForSlowdown} width={700} />
      </FlexBox>
    </Slide>
  </>
);
