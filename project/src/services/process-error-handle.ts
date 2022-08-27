import {store} from '../store';
import {setError} from '../store/data-process/data-process';
import {TIMEOUT_SHOW_ERROR} from '../const';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  console.log(store);

  setTimeout(
    () => store.dispatch(setError(null)),
    TIMEOUT_SHOW_ERROR,
  );
};
