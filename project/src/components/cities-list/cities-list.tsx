import {cityObjects} from '../../const';

type CitiesListProps = {
  activeCity: string,
  onCitySet: (cityName: string) => void;
}

function CitiesList({activeCity, onCitySet}: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cityObjects.map((city) => (
        <li className="locations__item" key={city.name} onClick={() => onCitySet(city.name)} >
          <a className={`locations__item-link ${city.name === activeCity ? 'tabs__item--active' : ''} tabs__item`} href={'/'}>
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
