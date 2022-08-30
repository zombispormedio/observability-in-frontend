import React from "react";
import { Heading, Slide, Image, CodePane, FlexBox } from "spectacle";
import loadView from "../images/load_view.png";
import navigation from "../images/navigation.png";

export const MeasurePageDataLoadingSlides = () => (
  <>
    <Slide className="text-white">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">Measure page data loading</Heading>
        <Image src={loadView} width={1224} />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Measure page data loading</Heading>
      <CodePane language="jsx">{`  const { data: countData, isLoading: isPlantsCountLoading } = useTracedQuery<{
    count: number;
  }>(["plants.count"], getPlantsCount);

  const { data, isLoading: isPlantsLoading } = useTracedQuery<{
    items: { id: string; name: string; imageUrl: string }[];
  }>(["plants"], getPlants);

  useTracePageDataLoad(isPlantsCountLoading || isPlantsLoading);`}</CodePane>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Measure page data loading</Heading>
      <CodePane
        language="jsx"
        highlightRanges={[
          [1, 10],
          [10, 18],
          [23, 34],
          [36, 50],
        ]}
      >{`function useTracedQuery (arg1, arg2, arg3) {
  const tracedPage = useTracedPage();
  const { queryFn, queryKey, ...restOfArgs } = parseQueryArgs(arg1, arg2, arg3);

  return useQuery({
    ...restOfArgs,
    queryKey,
    queryFn: (...queryFnArgs) => {
      const parentSpan = tracedPage.getPageSpan();
      const span = getTracer().startSpan(
        "query",
        {
          kind: SpanKind.CLIENT,
          attributes: {
            component: "query",
            "query.key": JSON.stringify(queryKey),
            "location.url": window.location.href,
          },
        },
        parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined
      );
      let returnResult;
      try {
        returnResult = context.with(
          trace.setSpan(context.active(), span),
          () => queryFn(...queryFnArgs)
        );
      } catch (error) {
        span.setStatus({
          code: SpanStatusCode.ERROR,
          message: (error as unknown as Error | undefined)?.message,
        });
        span.recordException(error as unknown as Error);
        throw error;
      }
      if (returnResult instanceof Promise) {
        returnResult = returnResult
          .then((data) => {
            span.setStatus({
              code: SpanStatusCode.OK,
            });
            return data;
          })
          .catch((error) => {
            span.setStatus({
              code: SpanStatusCode.ERROR,
              message: (error as unknown as Error | undefined)?.message,
            });
            span.recordException(error as unknown as Error);
            throw error;
          })
          .finally(() => {
            span.end();
          });
      } else {
        span.setStatus({
          code: SpanStatusCode.OK,
        });
        span.end();
      }
          return returnResult;
    }
  });
};
`}</CodePane>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Measure page data loading</Heading>
      <CodePane
        language="jsx"
        highlightRanges={[
          [1, 18],
          [20, 22],
          [24, 35],
          [37, 50],
        ]}
      >{`const TracedPage = ({
  page,
  children,
}: {
  page: string;
  children: ReactNode;
}) => {
  const pageSpanRef = useRef<Span | undefined>();
  const createPageSpan = () =>
    getTracer().startSpan(
      \`pageDataLoad:\$\{page\}\`,
      {
        attributes: {
          component: "page",
          page,
          "location.url": window.location.href,
        },
      }
    );
  if (!pageSpanRef.current) {
    pageSpanRef.current = createPageSpan();
  }

  const value = useMemo(
    () => ({
      getPageSpan: () => pageSpanRef.current,
      endPageSpan: () => {
        if (pageSpanRef.current) {
          pageSpanRef.current.end();
          pageSpanRef.current = createPageSpan();
        }
      },
    }),
    []
  );

  return (
    <TracedPageContext.Provider value={value}>
      {children}
    </TracedPageContext.Provider>
  );
};

`}</CodePane>
    </Slide>
    <Slide className="text-white">
      <Heading fontSize="h3">Measure page data loading with navigation</Heading>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Image src={navigation} />
      </FlexBox>
    </Slide>
  </>
);
