import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import PortfolioPage from "./pages/portfolioPage/portfolioPage";
import HomeLayout from "./layouts/homeLayout";
import ContactPage from "./pages/contactPage/contactPage";
import NotFoundPage from "./pages/404/404";
import ScrollToTop from "./pageLoader/scrollToTop";
import EnhancedRouteTransition from "./pageLoader/routerTransition";

export default function Router() {
  return (
    <>
      <ScrollToTop />
      <EnhancedRouteTransition>
        <Routes>
          <Route element={<HomeLayout />} path="/">
            <Route element={<Homepage />} index />
            <Route element={<PortfolioPage />} path="portfolio" />
            <Route element={<ContactPage />} path="contact" />
            <Route element={<NotFoundPage />} path="*" />
          </Route>
        </Routes>
      </EnhancedRouteTransition>
    </>
  );
}