import Head from 'next/head';
import Layout from '../../components/Layout';

import houses from '../houses.json';
import DateRangePicker from '../../components/DateRangePicker';

const House = props => (
  <Layout
    content={
      <div className="container">
        <Head>
          <title>{props.house.title}</title>
        </Head>
        {/* Semantic HTML helps us breakdown the page easier. */}
        <article>
          <img src={props.house.picture} width="100%" alt="House picture" />
          <p>
            {props.house.type} - {props.house.town}
          </p>
          <p>{props.house.title}</p>
          <p>
            {props.house.rating} ({props.house.reviewsCount})
          </p>
        </article>
        <aside>
          <h2>Add dates for prices</h2>
          <DateRangePicker />
        </aside>

        {/* Styling */}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 60% 40%;
            grid-gap: 30px;
          }
          aside {
            border: 1px solid #ccc;
            padding: 20px;
          }
        `}</style>
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
