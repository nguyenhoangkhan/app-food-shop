import React from "react";
import { publicRoutes } from "./Routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import FooterMenu from "./components/FooterMenu";
import Header from "./components/Header";
const Layout = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <FooterMenu />
      </Router>
    </>
  );
};

export default Layout;
