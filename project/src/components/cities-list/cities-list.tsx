import {cityNames} from '../../const';
import {useAppDispatch} from '../../hooks';
import {setActiveCity} from '../../store/action';

type CitiesListProps = {
  activeCity: string,
}

function CitiesList({activeCity}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleSetCity = (cityName: string) => {
    dispatch(setActiveCity(cityName));
  };

  return (
    <ul className="locations__list tabs__list">
      {cityNames.map((cityName) => (
        <li className="locations__item" key={cityName} onClick={() => handleSetCity(cityName)} >
          <span style={{cursor:'pointer'}} className={`locations__item-link ${cityName === activeCity ? 'tabs__item--active' : ''} tabs__item`} >
            <span>{cityName}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
