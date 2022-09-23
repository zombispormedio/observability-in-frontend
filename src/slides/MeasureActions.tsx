import React from "react";
import { Heading, Slide, Image, FlexBox, CodePane, Notes } from "spectacle";
import mutation from "../images/mutation.png";
import mutationExample from "../images/mutation_example.png";

export const MeasureActionsSlides = () => (
  <>
    <Slide className="text-white">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">Measure actions</Heading>
        <Image src={mutationExample} width={1200} />
      </FlexBox>
      <Notes>
        What can we instrument in client applications? First, we can measure
        actions: form submissions, button clicks…
      </Notes>
    </Slide>
    <Slide className="text-white">
      <Heading fontSize="h3">Measure actions</Heading>
      <Image src={mutation} />
      <Notes>
        This is a simple result of instrumenting an action. See how it's
        connected with the backend.
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Measure actions</Heading>
      <CodePane
        language="jsx"
        highlightRanges={[
          [1, 6],
          [8, 16],
          [18, 34],
        ]}
      >{`const { mutate: createPlantMutate } = useTracedMutation(createPlant, {
    onSuccess: () => {
      queryClient.invalidateQueries(["plants"]);
      queryClient.invalidateQueries(["plants.count"]);
    },
});

const formik = useFormik({
    initialValues: {
      name: "",
      imageUrl: "",
    },
    onSubmit: (values, helpers) => {
      createPlantMutate(values);
    },
});

return  (
    <div>
     (...)
      <button type="submit" onClick={() => formik.handleSubmit()}>
        Submit
      </button>
    </div>
);`}</CodePane>
      <Notes>
        I use react query, then we talk about mutations and queries. As we see,
        we have a normal code, you have your mutation, your hook to manage a
        form and your submit button. But, I needed to make a wrapper over the
        useMutation.
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Measure actions</Heading>
      <CodePane
        language="jsx"
        highlightRanges={[
          [1, 12],
          [16, 23],
          [24, 30],
          [33, 38],
          [39, 42],
          [43, 50],
        ]}
      >{`function useTracedMutation(arg1, arg2, arg3) {
  const { mutationFn, ...restOfMutationArgs } = parseMutationArgs(arg1, arg2, arg3);

  const { mutate, ...rest } = useMutation({
    ...restOfMutationArgs,
    mutationFn: ({ opentelemetry, variables }) => {
      return context.with(
        trace.setSpan(context.active(), opentelemetry.currentSpan),
        () => mutationFn?.(variables)
      );
    },
  });

  return {
    ...rest,
    mutate: (variables, options) => {
      const span = getTracer().startSpan("mutate", {
        kind: SpanKind.CLIENT,
        attributes: {
          component: "mutation",
        },
      });

      return mutate(
        {
          variables,
          opentelemetry: {
            currentSpan: span,
          },
        },
        {
          ...options,
          onSuccess: (data, { variables }, context) => {
            span.setStatus({
              code: SpanStatusCode.OK,
            });
            return options?.onSuccess?.(data, variables, context);
          },
          onSettled: (data, error, { variables }, context) => {
            span.end();
            return options?.onSettled?.(data, error, variables, context);
          },
          onError: (error, { variables }, context) => {
            span.setStatus({
              code: SpanStatusCode.ERROR,
              message: (error as unknown as Error | undefined)?.message,
            });
            span.recordException(error as unknown as Error);
            return options?.onError?.(error, variables, context);
          },
        }
      );
    },
  };
}
`}</CodePane>
      <Notes>
        This is the implementation. Maybe by having the library instrumented
        with Open Telemetry or via a plugin, we could have a better
        implementation. But now we live with a wrapper. We need to pass the
        current span to the mutation function because the context is lost in the
        library. We make a wrapper over the mutate function, we start the span,
        and we handle the span lifecycle in the callbacks.
      </Notes>
    </Slide>
  </>
);
