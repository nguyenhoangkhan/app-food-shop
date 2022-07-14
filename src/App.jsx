import React, { useContext } from "react";
import { publicRoutes, privateRoutes } from "./Routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import { StoreContext } from "./store";
import Loading from "./components/Loading";
const App = () => {
  const { loading } = useContext(StoreContext);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            {privateRoutes.map((route, index) => {
              const Page = route.component;
              let Layout;
              if (route.layout) {
                Layout = route.layout;
              } else {
                Layout = React.Fragment;
              }
              return loading ? (
                <Loading />
              ) : (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
