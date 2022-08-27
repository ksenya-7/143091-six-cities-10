import {store} from '../store';
import {getError} from '../store/data-process/data-process';
import {TIMEOUT_SHOW_ERROR} from '../const';


export const processErrorHandle = (message: string): void => {
  store.dispatch(getError(message));
  setTimeout(
    () => store.dispatch(getError(null)),
    TIMEOUT_SHOW_ERROR,
  );
};
