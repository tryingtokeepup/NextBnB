import Head from 'next/head';
import houses from '../houses.json';
import Layout from '../../components/Layout';

const House = props => (
  <Layout
    content={
      <div>
        <Head>
          <title>{props.house.title}</title>
        </Head>
        <img src={props.house.picture} width="100%" alt="House picture" />
        <p>
          {props.house.type} - {props.house.town}
        </p>
        <p>{props.house.title}</p>
        <p>
          {props.house.rating} ({props.house.reviewsCount})
        </p>
      </div>
    }
  />
);
// query is a deconstructed property from the context object
// we reform the props passed from house.js and filter for only the house that is on the url query string
House.getInitialProps = ({ query }) => {
  const { id } = query;
  return {
    house: houses.filter(house => house.id === id)[0]
  };
};

export default House;
