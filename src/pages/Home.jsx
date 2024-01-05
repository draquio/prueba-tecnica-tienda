import { Details } from "../components/Details/Details";
import { Dashboard } from "../components/Store/Dashboard/Dashboard";
import { Firstsection } from "../components/landingpage/First-Section/Firstsection";
import { Info } from "../components/landingpage/Info/Info";
import { Prices } from "../components/landingpage/Prices/Prices";

export const Home = () => {
  return (
    <>
      <Firstsection />
      <Info />
      <Prices />
      <Dashboard />
      <Details />
    </>
  );
};
