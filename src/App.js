import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "@/routes";
import { Fragment } from "react";
import Provider from "./store/Provider";
import Defaultlayout from "@/component/Layouts/DefaultLayout";
function App() {
  return (
    <Router>
      <div className="wrapper">
        <Routes>
          {publicRoutes.map((route, idx) => {
            let Layout = Defaultlayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;
            return (
              <Route
                path={route.path}
                element={
                  <Provider>
                    <Layout>
                      <Page />
                    </Layout>
                  </Provider>
                }
                key={idx}
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
