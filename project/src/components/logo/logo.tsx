import {Link} from 'react-router-dom';
import {LogoSize} from '../../types/logo';


function Logo({width, height}:LogoSize): JSX.Element {
  return (
    <Link className="header__logo-link" to="/">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={width} height={height}/>
    </Link>
  );
}

export default Logo;
