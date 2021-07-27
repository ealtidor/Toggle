import "./Layout.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout-container">
      <nav className="layout-nav">
        <h1 className="layout-header">
          {currentUser ? (
            <>
            <Link className='layout-toogle' to='/properties'>TOGGLE </Link>
              </>
          ) : (
              <Link className='layout-toogle' to='/' >TOGGLE</Link>
          )}
          </h1>
        <header className="desktop-header">
          {currentUser ? (
            <>
              <Link className="layout-tenants" to="/tenants">
                TENANTS
              </Link>
              <Link className="layout-properties" to="/properties">
                PROPERTIES
              </Link>
              <p className="layout-username">
                {currentUser.username} <FontAwesomeIcon icon={faUser} />
              </p>
              <button className="layout-logout" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="layout-login" to="/login">
                LOGIN
              </Link>
              <Link className="layout-register" to="/">
                REGISTER
              </Link>
            </>
          )}
        </header>
      </nav>
      <div className="layout-children">{props.children}</div>
      
    </div>
  );
}
