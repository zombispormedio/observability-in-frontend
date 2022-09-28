import React from "react";
import { CodePane, Heading, Slide, Notes } from "spectacle";

export const SetupOpenTelemetrySlide = () => (
  <Slide>
    <Heading fontSize="h3">Setup Opentelemetry</Heading>
    <CodePane
      language="jsx"
      highlightRanges={[
        [1, 16],
        [18, 24],
        [30, 43],
      ]}
    >{`import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { FetchInstrumentation } from "@opentelemetry/instrumentation-fetch";
import { UserInteractionInstrumentation } from "@opentelemetry/instrumentation-user-interaction";
import { Resource } from "@opentelemetry/resources";
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { WebTracerProvider } from "@opentelemetry/sdk-trace-web";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { ZoneContextManager } from "@opentelemetry/context-zone";
import { OPENTELEMETRY_AGENT_ENDPOINT } from "./config";

const provider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "flora-client",
  }),
});

provider.addSpanProcessor(
  new SimpleSpanProcessor(
    new OTLPTraceExporter({
      url: OPENTELEMETRY_AGENT_ENDPOINT,
    })
  )
);

provider.register({
  contextManager: new ZoneContextManager(),
});

registerInstrumentations({
  instrumentations: [
    new UserInteractionInstrumentation({
      shouldPreventSpanCreation: (eventType, element, span) => {
        span.setAttribute("target_element_id", element.id);
        return false;
      },
    }),
    new FetchInstrumentation({
      clearTimingResources: true,
      propagateTraceHeaderCorsUrls: [/.+/g],
    }),
  ],
});
        `}</CodePane>
    <Notes>
      But you need to set up Open Telemetry, in this case for the browser. We
      instance a provider that manages, processes and sends the spans. Also, we
      can generate spans automatically, currently, we can generate spans by the
      user interactions like clicks, and all the requests. You don't need to
      instrument this part, but if you want to connect it with your code, you
      need to create spans.
    </Notes>
  </Slide>
);
