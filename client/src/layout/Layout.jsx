import "./Layout.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Dropdown } from "react-bootstrap";

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
        {/* <div className='mobile-header'>
        <DropdownButton
          align="end"
          title="Dropdown right"
          id="dropdown-menu-align-right"
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
        </div> */}
      </nav>
      <div className="layout-children">{props.children}</div>
      <footer>
        <p>© Emanuella Altidor, 2021</p>
      </footer>
    </div>
  );
}
