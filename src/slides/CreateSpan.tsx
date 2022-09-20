import React from "react";
import { CodePane, Heading, Slide } from "spectacle";

export const CreateSpanSlide = () => (
  <Slide>
    <Heading fontSize="h3">Create span</Heading>
    <CodePane
      language="jsx"
      highlightRanges={[
        [1, 10],
        [12, 24],
      ]}
    >{`import { context, SpanStatusCode, trace, SpanKind } from "@opentelemetry/api";

const span = trace.getTracer("my-application-tracer").startSpan("my-function", {
  kind: SpanKind.CLIENT,
  attributes: {
    component: "web",
    "enduser.id": "user-id",
    "enduser.role": "user-role"
  },
});

try {
  context.with(trace.setSpan(context.active(), span), () => {
     // Do some work here
     makeARequest();
     calculateHardThings();
  });
  span.setStatus({ code: SpanStatusCode.OK });
} catch (error) {
  span.setStatus({ code: SpanStatusCode.ERROR, message: error.message });
  span.recordException(error);
} finally {
  span.end();
}
`}</CodePane>
  </Slide>
);
