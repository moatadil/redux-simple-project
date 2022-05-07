import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authAction } from '../store/authSlice'
const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(authAction.logout())
  }
  return (
    <header className={ classes.header }>
      <h1>Redux Auth</h1>
      { isAuth && (<nav>
        <ul>
          <li>
            <button onClick={ logoutHandler }>Logout</button>
          </li>
        </ul>
      </nav>) }
    </header>
  );
};

export default Header;
