
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
function Header() {
  const bag = useSelector(store=> store.bag)
  // console.log("bag containers: ",bag.length);

  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link to="/">Men</Link>
          <Link to="/">Women</Link>
          <Link to="/">Kids</Link>
          <Link to="/">Home & Living</Link>
          <Link to="/">Beauty</Link>
          <Link to="/">
            Studio <sup>New</sup>
          </Link>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
          <IoPersonCircleOutline />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
          <FaHandHoldingHeart />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="bag">
          <LiaShoppingBagSolid />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
}
export default Header;
