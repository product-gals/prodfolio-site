import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Skip focus management on initial page load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Move focus to main content after SPA navigation
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.setAttribute("tabindex", "-1");
      mainContent.focus({ preventScroll: true });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
