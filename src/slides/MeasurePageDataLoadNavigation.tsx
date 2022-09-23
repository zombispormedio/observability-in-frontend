import React from "react";
import { Heading, Slide, Image, CodePane, FlexBox, Notes } from "spectacle";
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
        <Heading fontSize="h3">Bonus track: Navigation</Heading>
        <Image src={navigationExample} width={1200} />
      </FlexBox>
      <Notes>And we can iterate this to take into account navigation.</Notes>
    </Slide>
    <Slide className="text-white">
      <Heading fontSize="h3">Bonus track: Navigation</Heading>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Image src={navigation} />
      </FlexBox>
      <Notes>
        We can click on a link and propagate the parent span to the loading
        view. The click and navigation spans are created by the User interaction
        instrumentation.
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Bonus track: Navigation</Heading>
      <CodePane language="jsx">{`<Link 
    to={\`/plants/\${plant.id}\`}
    onClick={() => tracedNavigation.applyNavigationSpan()}
    >`}</CodePane>
      <Notes>
        We need to use another react context to store the parent span in an
        upper level. And when we click on a link, we extract and save the
        navigation span.
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Bonus track: Navigation</Heading>
      <CodePane
        language="jsx"
        highlightRanges={[
          [1, 18],
          [5, 11],
          [16, 19],
        ]}
      >{`const TracedNavigation = ({ children }: { children: ReactNode }) => {
  const [navigationSpan, setNavigationSpan] = useState<Span | undefined>();
  const value = useMemo(
    () => ({
      currentSpan: navigationSpan,
      applyNavigationSpan: () => {
        setNavigationSpan(trace.getSpan(context.active()));
      },
      resetNavigationSpan: () => {
        setNavigationSpan(undefined);
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
      <Notes>
        Here it’s the implementation. In this case, we use a useState to store
        the navigation span, and we need to set it and reset it.
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Bonus track: Navigation</Heading>
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
      <Notes>
        In the TracedPage component, we make use of the navigation context and
        we get the parent span, and when the page is loaded, we reset the
        navigation.
      </Notes>
    </Slide>

    <Slide className="text-white">
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Heading fontSize="h3">Bonus track: Pagination</Heading>
        <Image src={paginationExample} width={1200} />
      </FlexBox>
      <Notes>
        We can do almost the same for pagination, but we need to set the
        navigation span when we click the buttons.
      </Notes>
    </Slide>
    <Slide className="text-white">
      <Heading fontSize="h3">Bonus track: Pagination</Heading>
      <FlexBox
        justifyContent="center"
        alignContent="center"
        height="100%"
        flexDirection="column"
      >
        <Image src={pagination} />
      </FlexBox>
      <Notes>
        We can do almost the same for pagination, but we need to set the
        navigation span when we click the buttons.
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Bonus track: Pagination</Heading>
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
      <Notes>
        We can do almost the same for pagination, but we need to set the
        navigation span when we click the buttons.
      </Notes>
    </Slide>
  </>
);
