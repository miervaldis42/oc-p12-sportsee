// Imports
import { Routes, Route } from "react-router-dom";
import ROUTESLIST from "../router/routesList";

// Pages
import Profile from "../pages/Profile";
import Error404 from "../pages/Error404";

// Router
function App() {
  return (
    <Routes>
      <Route path={ROUTESLIST.profile.path} element={<Profile />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
