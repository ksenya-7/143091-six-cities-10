import {dataProcess, setActiveCity} from './data-process';
import {makeFakeDataState} from '../../utils/mocks';
import {ACTIVE_CITY, SortingType} from '../../const';


describe('Reducer: dataProcess', () => {

  let state = makeFakeDataState();

  const initialState = {
    city: ACTIVE_CITY,
    sorting: SortingType.Popular,
    reviews: [],
    error: null,
  };

  beforeEach(() => {
    state = makeFakeDataState();
  });

  it('without additional parameters should return initial state', () => {
    expect(dataProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });
  it('should update the active city by change the city', () => {
    state.city = 'some city';
    expect(dataProcess.reducer(state, setActiveCity(state.city)))
      .toEqual(state);
  });
});
