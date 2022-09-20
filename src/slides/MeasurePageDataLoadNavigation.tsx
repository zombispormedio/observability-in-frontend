import React from "react";
import { Heading, Slide, Image, CodePane, FlexBox } from "spectacle";
import navigation from "../images/navigation.png";
import pagination from "../images/pagination.png";
import navigationExample from "../images/navigation_example.png";
import paginationExample from "../images/pagination_example.png";

export const MeasurePageLoadNavigationSlides = () => (
  <>
    <Slide className="text-white">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">Measure page load: Navigation</Heading>
        <Image src={navigationExample} width={1200} />
      </FlexBox>
    </Slide>
    <Slide className="text-white">
      <Heading fontSize="h3">Measure page load: Navigation</Heading>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Image src={navigation} />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Measure page load: Navigation</Heading>
      <CodePane language="jsx">{`<Link 
    to={\`/plants/\${plant.id}\`}
    onClick={() => tracedNavigation.applyNavigationSpan()}
    >`}</CodePane>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Measure page load: Navigation</Heading>
      <CodePane
        language="jsx"
        highlightRanges={[
          [1, 18],
          [5, 11],
          [16, 19],
        ]}
      >{`const TracedNavigation = ({ children }: { children: ReactNode }) => {
  const [navigationSpan, applyNavigationSpan] = useState<Span | undefined>();
  const value = useMemo(
    () => ({
      currentSpan: navigationSpan,
      applyNavigationSpan: () => {
        applyNavigationSpan(trace.getSpan(context.active()));
      },
      resetNavigationSpan: () => {
        applyNavigationSpan(undefined);
      },
    }),
    [navigationSpan]
  );

  return (
    <TracedNavigationContext.Provider value={value}>
      {children}
    </TracedNavigationContext.Provider>
  );
};`}</CodePane>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Measure page load: Navigation</Heading>
      <CodePane
        language="jsx"
        highlightRanges={[[8], [17], [45]]}
      >{`const TracedPage = ({
  page,
  children,
}: {
  page: string;
  children: ReactNode;
}) => {
  const tracedNavigation = useTracedNavigation();
  const pageSpanRef = useRef<Span | undefined>();
  if (!pageSpanRef.current) {
     pageSpanRef.current = createPageSpan(
        \`pageDataLoad:\$\{page\}\`,
      {
        page,
        "data.status": "first_loading",
      },
      tracedNavigation.currentSpan
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
            },
            tracedNavigation.currentSpan
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
          tracedNavigation.resetNavigationSpan();
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
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">Measure page load: Pagination</Heading>
        <Image src={paginationExample} width={1200} />
      </FlexBox>
    </Slide>
    <Slide className="text-white">
      <Heading fontSize="h3">Measure page load: Pagination</Heading>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Image src={pagination} />
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Measure page load: Pagination</Heading>
      <CodePane language="jsx">
        {`const nextPage = () => {
  tracedNavigation.applyNavigationSpan();
  (...)
};

const previousPage = () => {
  tracedNavigation.applyNavigationSpan();
  (...)
};

return (
  <>
    <button onClick={previousPage}> Previous page </button>
    <button onClick={nextPage} > Next </button>
  </>
)
`}
      </CodePane>
    </Slide>
  </>
);
