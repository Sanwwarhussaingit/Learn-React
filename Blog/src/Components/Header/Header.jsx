// import CreatePost from "../BlogList/CreatePost";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="container ">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="#" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./Components/Pages/Java" className="nav-link">
                Java
              </Link>
            </li>

            <li className="nav-item">
              <Link to="../AddPost" className="nav-link">
                Create Blog
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}
export default Header;
