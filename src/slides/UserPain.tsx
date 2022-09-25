import React from "react";
import { FlexBox, Slide, Image, Notes } from "spectacle";
import firstWorldProblemsForCrashes from "../images/first_world_problems1.png";

export const UserPainSlides = () => (
  <>
    <Slide backgroundColor="rgb(255, 255, 255)">
      <FlexBox justifyContent="center" alignContent="center" height="100%">
        <Image src={firstWorldProblemsForCrashes} width={700} />
      </FlexBox>
      <Notes>
        They were only doing their job. But the application was not working. Or
        totally time-consuming.
      </Notes>
    </Slide>
  </>
);
