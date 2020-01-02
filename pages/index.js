import houses from './houses.json';
import House from '../components/house.js';

const Index = () => (
  <div>
    <h1>Nextbnb</h1>
    <h2>Places to Stay</h2>

    <div className="houses">
      {houses.map((house, index) => {
        return <House key={index} {...house} />;
      })}
    </div>
  </div>
);

export default Index;
