import React from "react";
import { CodePane, Heading, Slide } from "spectacle";

export const CreateSpanSlide = () => (
  <Slide>
    <Heading fontSize="h3">Create span</Heading>
    <CodePane language="jsx">{`import { context, SpanStatusCode, trace } from "@opentelemetry/api";
const span = trace.getTracer("my-application-tracer").startSpan("my-function", {
  attributes: {
    component: "web",
    "enduser.id": "user-id",
    "enduser.role": "user-role"
  },
});

try {
  context.with(context.active(), () => myFunction());
  span.setStatus({ code: SpanStatusCode.OK });
} catch (error) {
  span.setStatus({ code: SpanStatusCode.OK, message: error.message });
  span.recordException(error);
} finally {
  span.end();
}
`}</CodePane>
  </Slide>
);
