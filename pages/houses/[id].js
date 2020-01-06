import houses from '../houses.json';

const House = props => (
  <div>
    <p>{props.house.title}</p>
  </div>
);
// query is a deconstructed property from the context object
House.getInitialProps = ({ query }) => {
  const { id } = query;
  return {
    house: houses.filter(house => house.id === id)[0]
  };
};

export default House;
