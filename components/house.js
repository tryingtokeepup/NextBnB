import Link from 'next/link';

const House = props => {
  // we are passing props down with {... house} spreading in the index
  return (
    // Very cool, we can basically use routing with Next's version of
    <Link href="/houses/[id]" as={'/houses/' + props.id}>
      <a>
        <img
          src={props.picture}
          width="100%"
          alt="A picture of the rental house"
        />
        <p>
          {props.type} - {props.town}
        </p>

        <p>{props.title}</p>
        <p>
          {props.rating} ({props.reviewsCount})
        </p>
      </a>
    </Link>
  );
};

// implicit returns with arrow fnctions are strange beasts
export default House;
