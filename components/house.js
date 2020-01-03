const House = props => {
  // we are passing props down with {... house} spreading in the index
  return (
    <div>
      <img
        src={props.picture}
        width="100%"
        alt="A picture of the rental house"
      />
      <h2>House</h2>
    </div>
  );
};

// implicit returns with arrow fnctions are strange beasts
export default House;
