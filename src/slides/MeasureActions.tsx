import React from "react";
import { Heading, Slide, Image, FlexBox, CodePane } from "spectacle";
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
    </Slide>
    <Slide className="text-white">
      <Heading fontSize="h3">Measure actions</Heading>
      <Image src={mutation} />
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
    </Slide>

    <Slide>
      <Heading fontSize="h3">Measure actions</Heading>
      <CodePane
        language="jsx"
        highlightRanges={[
          [1, 12],
          [16, 23],
          [25, 31],
          [34, 39],
          [40, 43],
          [44, 51],
        ]}
      >{`function useTracedMutation (arg1, arg2, arg3){
    const { mutationFn, ...restOfMutationArgs } = parseMutationArgs(arg1, arg2, arg3)

    const { mutate, ...rest } = useMutation({
        ...restOfMutationArgs,
        mutationFn: ({ opentelemetry, variables }) => {
          return context.with(
            trace.setSpan(context.active(), opentelemetry.currentSpan),
            () => mutationFn?.(variables)
          );
        }
    });

   return {
    ...rest,
    mutate: useCallback<UseMutateFunction<TData, TError, TVariables, TContext>>(
      (variables, options) => {
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
      [mutate]
    )
    ),
  } 
}
`}</CodePane>
    </Slide>
  </>
);
