import {City} from '../../types/offer';

type CitiesListProps = {
  cities: City[];
  activeCity: string,
}

function CitiesList({cities, activeCity}: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.name}>
          <a className={`locations__item-link ${city.name === activeCity ? 'tabs__item--active' : ''} tabs__item`} href={'/'}>
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
