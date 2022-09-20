import React from "react";
import { Heading, Slide, Image, CodePane, FlexBox, Box } from "spectacle";
import loadView from "../images/load_view.png";
import loadViewExample from "../images/load_view_example.png";

export const MeasurePageDataLoadSlides = () => (
  <>
    <Slide className="text-white">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">Measure page data load</Heading>
        <Image src={loadViewExample} width={1200} />
      </FlexBox>
    </Slide>
    <Slide className="text-white">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">Measure page data load</Heading>
        <Image src={loadView} width={1224} />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Measure page data load</Heading>
      <CodePane language="jsx">{`const {
    data: countData,
    isLoading: isPlantsCountLoading,
    isRefetching: isPlantsCountRefetching,
  } = useTracedQuery(["plants.count"], getPlantsCount);

 const {
    data,
    isLoading: isPlantsLoading,
    isRefetching: isPlantsRefetching,
  } = useTracedQuery(["plants"], getPlants);

useTracePageDataLoad(
  isPlantsCountLoading || isPlantsLoading,
  isPlantsCountRefetching || isPlantsRefetching
);`}</CodePane>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Measure page data load</Heading>
      <CodePane
        language="jsx"
        highlightRanges={[
          [1, 10],
          [10, 21],
          [23, 34],
          [36, 43],
          [44, 51],
          [52, 59],
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
      <Heading fontSize="h3">Measure page data load</Heading>
      <CodePane language="jsx">{`function useTracePageDataLoad(loading: boolean, refetching?: boolean) {
  const previousLoading = usePrevious(loading);
  const previousRefetching = usePrevious(refetching);
  const tracedPage = useTracedPage();

  useEffect(() => {
    if (previousLoading && !loading) {
      tracedPage.endPageSpan();
    }
  }, [previousLoading, loading]);

  useEffect(() => {
    if (previousRefetching && !refetching) {
      tracedPage.endPageSpan({
        "data.refetch": true,
      });
    }
  }, [previousRefetching, refetching]);
};`}</CodePane>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Measure page data load</Heading>
      <CodePane
        language="jsx"
        highlightRanges={[
          [1, 18],
          [8, 18],
          [22, 33],
          [35, 43],
          [48, 54],
        ]}
      >{`const TracedPage = ({
  page,
  children,
}: {
  page: string;
  children: ReactNode;
}) => {
  const pageSpanRef = useRef<Span | undefined>();
  if (!pageSpanRef.current) {
     pageSpanRef.current = createPageSpan(
        \`pageDataLoad:\$\{page\}\`,
      {
        page,
        "data.status": "first_loading",
      }
    );
    firstLoad.current = true;
  }

  const value = useMemo(
    () => ({
      getPageSpan: () => {
        if (!pageSpanRef.current) {
          pageSpanRef.current = createPageSpan(
            \`pageDataLoad:\$\{page\}\`,
            {
              page,
              "data.status": "loading",
            }
          );
        }

        return pageSpanRef.current;
      },
      endPageSpan: (attributes?: Attributes) => {
        if (pageSpanRef.current) {
          if (attributes) {
            pageSpanRef.current.setAttributes(attributes);
          }
          pageSpanRef.current.end();
          pageSpanRef.current = undefined;
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
  </>
);
