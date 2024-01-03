import { Menu } from "../components/landingpage/Menu/Menu";
import "./Layout.scss";
export function Layout(props) {
  const { children } = props;
  return (
    <div className="main">
      <header><Menu /> </header>
      <div className="container">{children}</div>
      <footer>footer</footer>
    </div>
  );
}
