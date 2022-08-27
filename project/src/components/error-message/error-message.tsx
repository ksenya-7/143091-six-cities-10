import {useAppSelector} from '../../hooks';
import './error-message.css';
import {setError} from '../../store/data-process/data-process';

function ErrorMessage(): JSX.Element | null {
  // const error = useAppSelector(setError);

  // return (error)
  //   ? <div className='error-message'>{`${error}`}</div>
  //   : null;
  // return null;
}

export default ErrorMessage;
