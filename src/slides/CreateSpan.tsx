import React from "react";
import { CodePane, Heading, Slide, Notes } from "spectacle";

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
    <Notes>
      In the front end, traces fit perfectly. The basic unit of the trace is a
      span. A piece of work is like a request, a called function, and
      interaction. A span starts and ends. Attributes are the most important
      part because they are the things that tell you what is happening in the
      software. User id, the request path, the clicked element. Then
      OpenTelemetry gives us a way, called context, to propagate the parent
      spans to the child spans. We can set the status and add errors to the
      span. This is the basic implementation.
    </Notes>
  </Slide>
);
