import React from "react";
import { Heading, Slide, Image, CodePane, FlexBox, Notes } from "spectacle";
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
        <Heading fontSize="h3">Measure load view</Heading>
        <Image src={loadViewExample} width={1200} />
      </FlexBox>
      <Notes>
        And the most common interaction in any user-facing app is loading pages.
      </Notes>
    </Slide>
    <Slide className="text-white">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">Measure load view</Heading>
        <Image src={loadView} width={1224} />
      </FlexBox>
      <Notes>
        In this trace, I like to group all the data loading that page does.
        Getting the list of plants and the count of plants. Possibly, it's
        missing the span related to the render, but we can think about it in
        another iteration.
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Measure load view</Heading>
      <CodePane
        language="jsx"
        highlightRanges={[
          [1, 11],
          [13, 23],
        ]}
      >{`const {
    data: countData,
    isLoading: isPlantsCountLoading,
    isRefetching: isPlantsCountRefetching,
  } = useTracedQuery(["plants.count"], getPlantsCount);

 const {
    data,
    isLoading: isPlantsLoading,
    isRefetching: isPlantsRefetching,
  } = useTracedQuery(["plants"], getPlants);

/**
 * <TracedPage>
 *  <PlantListPage />
 * </TracePage>
 **/
useTracePageDataLoad(
  isPlantsCountLoading || isPlantsLoading,
  isPlantsCountRefetching || isPlantsRefetching
);`}</CodePane>
      <Notes>
        We work normally like mutations, but yes, we go back with the wrappers,
        but we need something to know when the whole data loading is finishing,
        then the parent span. I called the hook “useTracePageDataLoad”, and
        depends on the loading state and the refetching state. Yes, I want
        another trace when the data is reloaded at some moment.
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Measure load view</Heading>
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
      <Notes>
        The wrapper for the user query is quite similar to the useMutation one,
        but, we make all the job in the query function. If you see we have
        another hook called “`useTracedPage`” to get the current page span, so,
        the parent span. We create the span, and we need to manage and propagate
        the context, in the query function possibly we do a fetch, and we need
        to propagate the parent. This is an implementation plus, we need to know
        when to finish the span, and if it's a promise or a normal function.
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Measure load view</Heading>
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
      <Notes>
        This is the implementation of the “useTracePageDataLoad”, it's a way to
        know when finishing the page span.
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Measure load view</Heading>
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
      <Notes>
        And this is the provider of the page span, we create a span at the
        beginning, storing it in a ref. And we have the value context, with two
        functions, getPageSpan, that returns the current one or creates another
        one if it's not created, this is important for refetching. Because when
        we end the span, we remove the page span, and in the next loading the
        page span is created. And we use React context for this.
      </Notes>
    </Slide>
  </>
);
