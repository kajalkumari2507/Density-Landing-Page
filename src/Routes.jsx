import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPagePage from 'pages/index';
const LandingPage = React.lazy(() => import("pages/index.jsx"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPagePage />} />
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
