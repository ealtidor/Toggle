import "./Layout.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout-container">
      <nav className="layout-nav">
        <h1 className="layout-header">TOGGLE</h1>
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
              <Link className="layout-register" to="/register">
                REGISTER
              </Link>
            </>
          )}
        </header>
      </nav>
      <div className="layout-children">{props.children}</div>
      <footer>
        <p>© Emanuella Altidor, 2021</p>
      </footer>
    </div>
  );
}
