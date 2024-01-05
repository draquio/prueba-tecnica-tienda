import { Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/Home";
export const WebRouter = () => {
  const loadLayaout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/" element={loadLayaout(Layout, Home)} />
    </Routes>
  );
};

