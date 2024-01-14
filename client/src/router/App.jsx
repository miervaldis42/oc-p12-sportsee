// Imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTESLIST from "../router/routesList";

// Pages
import PageLayout from "../pages/layouts/PageLayout";
import Profile from "../pages/Profile/Profile";

import Error from "../components/Container/Error/Error";
import Error400 from "../pages/Error400";
import Error500 from "../pages/Error500";

// Router
function App() {
  return (
    <Router>
      <Routes>
        {/* Authorized User */}
        <Route element={<PageLayout />}>
          <Route
            path={`${ROUTESLIST.profile.path}/:userId`}
            element={<Profile />}
          />

          <Route path="*" element={<Error />} />
        </Route>

        {/* Unauthorized User */}
        <Route>
          <Route path={ROUTESLIST.error500.path} element={<Error500 />} />
          <Route path={ROUTESLIST.error400.path} element={<Error400 />} />
          <Route
            path="*"
            redirect={ROUTESLIST.error400.path}
            element={<Error400 />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
