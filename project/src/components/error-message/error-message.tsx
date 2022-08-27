import {useAppSelector} from '../../hooks';
import './error-message.css';
import {setErrorMessage} from '../../store/data-process/selectors';


function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(setErrorMessage);

  return (error)
    ? <div className='error-message'>{`${error}`}</div>
    : null;
}

export default ErrorMessage;
