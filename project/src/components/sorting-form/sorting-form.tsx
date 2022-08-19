import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setActiveSorting} from '../../store/action';
import {typesOfSorting} from '../../const';

function Sorting(): JSX.Element {
  const [sortingOpen, setSortingOpen] = useState(false);

  const handleSortingOpen = () => {
    setSortingOpen((currentState) => !currentState);
  };

  const dispatch = useAppDispatch();

  const handleTypesOfSortingClick = (type: string) => {
    dispatch(setActiveSorting(type));
  };

  const typeOfSorting = useAppSelector((state) => state.sorting);

  return (
    <form className="places__sorting" action="#" method="get" onClick={handleSortingOpen}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {typeOfSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sortingOpen ? 'places__options--opened' : ''}`}>
        {typesOfSorting.map((type) => (
          <li className={`places__option ${type === typeOfSorting ? 'places__option--active' : ''}`} key={type} onClick={() => handleTypesOfSortingClick(type)} >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
