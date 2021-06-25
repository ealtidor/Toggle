import "./Layout.css";
import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className='layout-container'>
      <nav>
      <h1>TOGGLE</h1>
      <header>
        {currentUser ? (
          <>
            <Link to="/tenants">TENANTS</Link>
            <Link to="/properties">PROPERTIES</Link>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">LOGIN</Link>
            <Link to="/register">REGISTER</Link>
          </>
        )}
      </header>
      </nav>
      <div className='layout-children'>
      {props.children}
      </div>
      {/* <footer>
        <p>© Emanuella Altidor, 2021</p>
      </footer> */}
    </div>
  );
}
