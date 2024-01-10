import { BestIcon, DetailsIcon, HomeIcon, StoreIcon, TrophyIcon } from "../../Icons/Icons";
import "./MenuSidebar.scss";
import { Link } from "react-scroll";
const MenuSidebar = () => {
  return (
    <aside className="aside">
      <ul>
        <li className="menu_icon">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <HomeIcon />
          </Link>
        </li>
        <li className="menu_icon">
          <Link
            activeClass="active"
            to="info"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <TrophyIcon />
          </Link>
        </li>
        <li className="menu_icon">
          <Link
            activeClass="active"
            to="best"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <BestIcon />
          </Link>
        </li>
        <li className="menu_icon">
          <Link
            activeClass="active"
            to="dashboard"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <StoreIcon />
          </Link>
        </li>
        <li className="menu_icon">
          <Link
            activeClass="active"
            to="details"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <DetailsIcon />
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MenuSidebar;
