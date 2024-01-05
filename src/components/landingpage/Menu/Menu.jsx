import { Link } from "react-scroll";
import "./Menu.scss";
export const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="info" spy={true} smooth={true} offset={-50} duration={500}>
            Info
          </Link>
        </li>
        <li>
          <Link to="best" spy={true} smooth={true} offset={50} duration={500}>
            Best
          </Link>
        </li>
        <li>
          <Link
            to="dashboard"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};
