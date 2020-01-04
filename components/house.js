const House = props => {
  // we are passing props down with {... house} spreading in the index
  return (
    <div>
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
    </div>
  );
};

// implicit returns with arrow fnctions are strange beasts
export default House;
