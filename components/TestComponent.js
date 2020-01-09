import Link from 'next/link';
const TestComponent = props => {
  // we are passing props down with {... house} spreading in the index
  return (
    // Very cool, we can basically use routing with Next's version of
    <Link href="/test/[id]" as={'/test/' + props.id}>
      <a>
        <h2>click me test</h2>
      </a>
    </Link>
  );
};

// implicit returns with arrow fnctions are strange beasts
export default TestComponent;
