import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2">
              Home
            </Link>
          </li>

          <li>
            <Link to="/Blogs" className="nav-link px-2">
              Blogsx
            </Link>
          </li>

          <li>
            <Link to="/About" className="nav-link px-2">
              About
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
